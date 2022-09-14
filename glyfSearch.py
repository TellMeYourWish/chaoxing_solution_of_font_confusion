
import pickle
from fontTools.ttLib import TTFont
from hashlib import *
from io import BytesIO

with open("HanSansCN_glyfHashedTables.pkl","rb") as f:
    glyfHashed = pickle.load(f)[0]

with open("HanSansCN_CmapTables.pkl","rb") as f:
    cmap = pickle.load(f)

glyfHashed = {j:i for i,j in glyfHashed}
cmap = list(filter(lambda x: 0x4e00<=x[0] and x[0]<=0x9fa5,cmap))# 简体筛选
cmap = {j:i for i,j in cmap}

def translate(font: bytes):
    global glyfHashed,cmap
    table = []

    aa = TTFont(BytesIO(font))
    aa_glyphs = aa["glyf"].glyphs
    aa_cmap = aa.getBestCmap()
    aa_cmap = {j:i for i,j in zip(aa_cmap.keys(),aa_cmap.values())}
    for i,j in zip(aa_glyphs.keys(),aa_glyphs.values()):
        try:
            hashed = (sha1(j.data).digest(),md5(j.data).digest())
            table.append((chr(aa_cmap[i]),chr(cmap[glyfHashed[hashed]])))
        except KeyError:
            print(i,"无键值")
    return list(zip(*table))

if __name__=="__main__":
    with open("./aa.ttf","rb")as f:
        t=translate(f.read())
    print(t)
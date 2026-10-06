"""Generate TV-sized JPEGs; keep uploaded originals untouched."""
from pathlib import Path
import json
from PIL import Image, ImageOps
root=Path('pages-dist')
manifest=json.loads((root/'ads-manifest.json').read_text())
output=[]
for src in manifest['ads']:
    path=root/src.lstrip('/')
    if path.suffix.lower() in ('.png','.jpg','.jpeg','.webp'):
        with Image.open(path) as image:
            image=ImageOps.exif_transpose(image)
            image.thumbnail((1280,720),Image.Resampling.LANCZOS)
            rgb=Image.new('RGB',image.size,(9,14,22))
            if image.mode in ('RGBA','LA') or 'transparency' in image.info:
                rgba=image.convert('RGBA');rgb.paste(rgba,mask=rgba.getchannel('A'))
            else: rgb.paste(image.convert('RGB'))
            dest=path.with_name(path.name+'.jpg')
            rgb.save(dest,quality=84,optimize=True)
            output.append('/ads/'+dest.name)
    else: output.append(src)
# Sample cards only appear until real advertisements are uploaded.
if any(not s.endswith('.svg') for s in output):
    output=[s for s in output if s not in ('/ads/pub1.svg','/ads/pub2.svg')]
manifest['ads']=output
(root/'ads-manifest.json').write_text(json.dumps(manifest))
print('TV advertisements:',len(output))

#!/usr/bin/env python3
"""
Extract questions from WinDev MMO file (images)
"""
from pathlib import Path

def extract_jpegs_from_mmo(mmo_path):
    """Extract JPEG images from MMO file"""
    with open(mmo_path, 'rb') as f:
        data = f.read()
    
    # Find all JPEG markers
    jpeg_starts = []
    pos = 0
    while True:
        idx = data.find(b'\xFF\xD8\xFF', pos)
        if idx == -1:
            break
        # Find JPEG end
        end_idx = data.find(b'\xFF\xD9', idx)
        if end_idx != -1:
            jpeg_starts.append((idx, end_idx + 2))
        pos = idx + 1
    
    print(f"Found {len(jpeg_starts)} JPEG images in MMO")
    
    output_dir = Path("mobile_app/assets/questions")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    extracted = 0
    for i, (start, end) in enumerate(jpeg_starts[:100]):  # Limit to first 100
        try:
            img_data = data[start:end]
            img_path = output_dir / f"question_{i}.jpg"
            with open(img_path, 'wb') as f:
                f.write(img_data)
            extracted += 1
        except Exception as e:
            print(f"Error extracting {i}: {e}")
    
    print(f"Extracted {extracted} images to {output_dir}")
    return extracted

# Also copy existing JPG files
def copy_skin_images():
    skins_dir = Path("Logiciels Code De La Route/Skins")
    output_dir = Path("mobile_app/assets/skins")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    count = 0
    for jpg in skins_dir.glob("*.JPG"):
        try:
            data = open(jpg, 'rb').read()
            with open(output_dir / jpg.name, 'wb') as f:
                f.write(data)
            count += 1
        except Exception as e:
            print(f"Error: {e}")
    
    print(f"Copied {count} skin images")
    return count

if __name__ == "__main__":
    mmofile = Path("Logiciels Code De La Route/Question.MMO")
    if mmofile.exists():
        extract_jpegs_from_mmo(mmofile)
    copy_skin_images()
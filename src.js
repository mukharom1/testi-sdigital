#!/bin/bash

# Pastikan folder tujuan ada
mkdir -p ~/testi-sdigital/imageaja

# Cari semua folder bernama "aja" dan pindahkan isinya
for path in ~/storage/*/aja; do
    if [ -d "$path" ]; then
        echo "✅ Ketemu folder: $path"
        # Pindahkan semua isi folder aja ke folder tujuan
        mv "$path"/* ~/testi-sdigital/imageaja/
        echo "📂 Isi dari $path sudah dipindahkan ke ~/testi-sdigital/imageaja"
    fi
done

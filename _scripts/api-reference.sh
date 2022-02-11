#!/bin/bash

set -e

API_VERSION="5.10.2"
TARBALL_URL="https://codeload.github.com/tinymce/tinymce/tar.gz/$API_VERSION"
API_TMPDIR="/tmp/tinymce-$API_VERSION"

echo -e "\n > importing data files for tinymce api reference: $API_VERSION\n"

rm -rf _data

rm -rf "$API_TMPDIR"
mkdir "$API_TMPDIR"
curl -s "$TARBALL_URL" | tar xzf - -C "$API_TMPDIR" --strip-components 1
moxiedoc "$API_TMPDIR/modules/tinymce/src/core/main/ts" -t antora -o "$API_TMPDIR/tinymce-api-reference.zip"
unzip -o "$API_TMPDIR/tinymce-api-reference.zip"

# remove old api adoc pages
rm -rf modules/root/pages/apis/

# removed old static api html pages (clear cache), it can corrupt the build 
rm -rf build/site/_/tinymce/6.0/apis/

# move newly generated adoc pages, antora will then generate new static html pages
mv _data/antora modules/root/pages/apis

# move api navigation
mv _data/moxiedoc_nav.adoc modules/root/moxiedoc_nav.adoc

# cleanup moxiedoc tmp _data folder
rm -rf _data

echo "donesky"
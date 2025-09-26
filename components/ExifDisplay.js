import React from 'react';
import {Stack, Text} from '@sanity/ui';

export default function ExifDisplay(props) {
  const asset = props?.parent?.image?.asset;
  const exif = asset?.metadata?.exif;
  const loc = asset?.metadata?.location;
  const exifDate = exif?.DateTimeOriginal || '— not found —';
  const gps = loc ? `lat ${loc.lat}, lng ${loc.lng}` : '— no GPS —';

  return (
    <Stack space={2}>
      <Text weight="semibold">EXIF Date:</Text>
      <Text>{exifDate}</Text>
      <Text weight="semibold">GPS:</Text>
      <Text>{gps}</Text>
    </Stack>
  );
}

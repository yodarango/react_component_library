/***************************************************************
 * Small utility component that returns a thumbnail of the size
 * specified in the width and height props.
 *
 * Sizes are of number type and represents pixel units. Since
 * this component is an <img /> element only width is
 * necessary, the element will automatically adjust
 * the proper height ratio base on the width
 * size. 🐺
 * ********
 */

//import fallbackImg from "@assets/images/fallback.png";
import { useEffect, useState } from "react";

// styles
import "./Thumbnail.scss";

export type TThumbnail = {
  maxHeight?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  width?: number | string;
  className?: string;
  fallback?: string;
  style?: object;
  alt: string;
  src: string;
};

const fallbackImg = "";

export const Thumbnail = ({
  className = "",
  maxHeight,
  fallback,
  maxWidth,
  height,
  width,
  alt,
  src,
  style,
}: TThumbnail) => {
  let size: any = {};
  if (height)
    size["height"] = typeof height === "string" ? height : `${height * 0.1}rem`;
  if (width)
    size["width"] = typeof width === "string" ? width : `${width * 0.1}rem`;
  if (maxWidth)
    size["maxWidth"] =
      typeof maxWidth === "string" ? maxWidth : `${maxWidth * 0.1}rem`;
  if (maxHeight)
    size["maxHeight"] =
      typeof maxHeight === "string" ? maxHeight : `${maxHeight * 0.1}rem`;

  return (
    <img
      style={{ ...size, ...style }}
      className={`shrood-thumbnail-kz20 ${className}`}
      src={src}
      alt={alt}
    />
  );
};

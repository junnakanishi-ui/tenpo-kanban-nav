import Image from "next/image"
import {
  PLATE_SIGN_HERO_IMAGES,
  type HeroTileSize,
} from "@/data/sign-types/plate-sign"

function getSizeClasses(size: HeroTileSize): string {
  switch (size) {
    case "md":
      return "col-span-3 row-span-1"
    case "sm":
      return "col-span-2 row-span-1"
  }
}

function getSizes(size: HeroTileSize): string {
  switch (size) {
    case "md":
      return "(max-width: 768px) 50vw, 25vw"
    case "sm":
    default:
      return "(max-width: 768px) 33vw, 17vw"
  }
}

export function FacadeGrid() {
  return (
    <div
      className="grid auto-rows-[120px] grid-cols-6 gap-1 px-1 md:auto-rows-[230px] md:grid-cols-12 md:gap-1 md:px-1"
      aria-hidden="true"
    >
      {PLATE_SIGN_HERO_IMAGES.map((image, index) => (
        <div
          key={image.id}
          className={`relative overflow-hidden rounded-md bg-muted shadow-sm ${getSizeClasses(image.size)}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={getSizes(image.size)}
            className="object-cover"
            priority={index < 5}
          />
        </div>
      ))}
    </div>
  )
}

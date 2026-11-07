"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

/**
 * Your profile photo, loaded from /public/images/profile.png.
 * If the file is missing, your "BH" initials are shown instead.
 */
export function ProfileImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${siteConfig.name} initials`}
        className="from-maroon to-maroon-deep font-display flex size-full items-center justify-center bg-gradient-to-br text-7xl font-bold"
      >
        {siteConfig.initials}
      </div>
    );
  }

  return (
    <Image
      src={siteConfig.profileImage}
      alt={`Portrait of ${siteConfig.name}`}
      fill
      priority
      sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 280px"
      className="object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}

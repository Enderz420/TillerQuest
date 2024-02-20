"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHand, faShield } from "@fortawesome/free-solid-svg-icons";

const placeholderAbilities = [
  {
    name: "Aid",
    href: "/Aid",
    icon: faUser,
  },
  {
    name: "Healing hands",
    href: "/Healing-hands",
    icon: faHand,
  },
  {
    name: "Shield",
    href: "/Shield",
    icon: faShield,
  },
];

export default function AbilityGrid() {
  return (
    <>
      {/* The following code can be exanded to include icons */}
      {placeholderAbilities.map((abilities) => {
        const icon = abilities.icon;
        return (
          <Link
            key={abilities.name}
            href={"../abilities" + abilities.href}
            className="flex flex-col gap-3 hover:text-purple-600 hover:border-purple-600 border-white border-2 rounded-lg p-3 items-center"
          >
            <FontAwesomeIcon icon={icon} className=" h-10" />
            <p>{abilities.name}</p>
          </Link>
        );
      })}
    </>
  );
}

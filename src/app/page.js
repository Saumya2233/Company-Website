"use client";

import Hero from "@/Components/home/Hero";
import One from "@/Components/home/One";
import Two from "@/Components/home/Two";
import Three from "@/Components/home/Three";
import Four from "@/Components/home/Four";
import Five from "@/Components/home/Five";
import Six from "@/Components/home/Six";
import Seven from "@/Components/home/Seven";
import Eight from "@/Components/home/Eight";
import Nine from "@/Components/home/Nine";
import Ten from "@/Components/home/Ten";
import Technologies from "@/Components/home/Technologies";
import Eleven from "@/Components/home/Eleven";

import ScrollReveal from "@/Components/home/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal>
        <One />
      </ScrollReveal>
      <ScrollReveal>
        <Eleven/>
      </ScrollReveal>

      <ScrollReveal>
        <Two />
      </ScrollReveal>

      <ScrollReveal>{/* <Hero /> */}</ScrollReveal>

      <ScrollReveal>
        <Three />
      </ScrollReveal>

      <ScrollReveal>
        <Four />
      </ScrollReveal>

      <ScrollReveal>
        <Five />
      </ScrollReveal>

      <ScrollReveal>
        <Six />
      </ScrollReveal>

      <ScrollReveal>
        <Seven />
      </ScrollReveal>

      <ScrollReveal>
        <Eight />
      </ScrollReveal>

      <ScrollReveal>
        <Nine />
      </ScrollReveal>

      <ScrollReveal>
        <Ten />
      </ScrollReveal>
    </>
  );
}

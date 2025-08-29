import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@packages/react";

export function Home() {
  return (
    <Accordion defaultValue={["React"]} collapsible multiple>
      {["React", "Solid", "Vue", "Svelte"].map((item) => (
        <AccordionItem key={item} value={item}>
          <AccordionTrigger>What is {item}?</AccordionTrigger>
          <AccordionContent>
            {item} is a JavaScript library for building user interfaces.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

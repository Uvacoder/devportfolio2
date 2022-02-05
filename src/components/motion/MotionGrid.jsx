import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MotionCard } from "./MotionCard";

const items = [
  { title: "Item 1", subTitle: "Subtitle 1", id: "1" },
  { title: "Item 2", subTitle: "Subtitle 2", id: "2" },
  { title: "Item 3", subTitle: "Subtitle 3", id: "3" },
  { title: "Item 4", subTitle: "Subtitle 4", id: "4" },
];

export function MotionGrid() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <motion.p animate={{ x: 100 }}>hi</motion.p>
      {items.map((item) => {
        <motion.div
          key={item.id}
          layout
          style={{ width: "50px", height: "50px" }}
          layoutId={item.id}
          onClick={() => setSelectedItem(item)}
        >
          <motion.h5>{item.subTitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>;
      })}

      <AnimatePresence>
        {selectedItem && (
          <MotionCard
            id={selectedItem.id}
            title={selectedItem.title}
            subTitle={selectedItem.subTitle}
            onClick={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

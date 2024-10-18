import { useEffect, useState } from "react";

const pageLoader = (length: number, delay: number) => {
    const [visibleSections, setVisibleSections] = useState(new Array(length + 1).fill(false));

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const showSections = (index: number) => {
            if (index < length + 1) {
                setVisibleSections((prev) => {
                    const newVisibleSections = [...prev];
                    newVisibleSections[index] = true;
                    return newVisibleSections;
                });
                timeoutId = setTimeout(() => showSections(index + 1), delay);
            }
        };

        showSections(0);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [length, delay]);

    return visibleSections;
};

export default pageLoader;
import { useRef, useState, useEffect } from "react";
import { useSegmentedControlStyles } from "./styles";
import AccessGuard from "../AcceccGuard/AccessGuard";
import { Link } from "react-router-dom";

const SegmentedControl = ({
    name,
    segments,
    callback,
    defaultIndex = 0,
    controlRef, 
}) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const componentReady = useRef<any>();
    const styles = useSegmentedControlStyles();

    useEffect(() => {
        componentReady.current = true;
    }, []);


    useEffect(() => {
        const activeSegmentRef = segments[activeIndex]?.ref;
        const { offsetWidth, offsetLeft } = activeSegmentRef?.current;
        const { style } = controlRef.current;

        style.setProperty("--highlight-width", `${offsetWidth}px`);
        style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
    }, [activeIndex, callback, controlRef, segments]);

    const onInputChange = (value, index) => {
        setActiveIndex(index);
        callback(value, index);
    };

    return (
        <div className={styles.controlsContainer} ref={controlRef}>
            <div
                className={`${styles.controls} ${componentReady.current ? styles.controlsReadyBefore : ""
                    }`}
            >
                {segments?.map((item, i) => (
                    <AccessGuard id={item.id} key={item.value}>
                        <Link to={item.href}>
                            <div
                                key={item.value}
                                className={`${styles.segment} ${i === activeIndex ? styles.activeSegmentLabel : ""
                                    } ${item.disabled && styles.disabled}`}
                                ref={item.ref}
                            >
                                <input
                                    type="radio"
                                    value={item.value}
                                    id={item.label}
                                    name={name}
                                    onChange={() => onInputChange(item.value, i)}
                                    checked={i === activeIndex}
                                    className={styles.controlsInput}
                                    disabled={item.disabled}
                                />
                                <label
                                    htmlFor={item.label}
                                    className={`${styles.segmentLabel} ${i === activeIndex ? styles.activeSegmentLabel : ""
                                        } `}
                                >
                                    {item.label}
                                </label>
                            </div>
                        </Link>
                    </AccessGuard>
                ))}
                <div
                    className={`${styles.controlsBefore} ${componentReady.current ? styles.controlsReadyBefore : ""
                        }`}
                />
            </div>
        </div>
    );
};

export default SegmentedControl;

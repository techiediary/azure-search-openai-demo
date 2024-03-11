import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Can I remove safety devices from the equipment?",
    "What is the safe procedure for clearing the machine of web wraps or jams?",
    "How should I keep my body parts and clothing safe while operating the equipment?"
];

const GPT4V_EXAMPLES: string[] = [
    "What precautions should I take when inspecting or adjusting the machine while it is in motion?",
    "Who is authorized to maintain/clean electrical and mechanical parts of the machine?",
    "What should I do before working with the machine if I have questions after reading the manual?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

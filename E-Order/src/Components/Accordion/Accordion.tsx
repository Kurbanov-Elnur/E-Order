import React, { useState } from 'react';
import './Accordion.scss';

interface AccordionProps {
    question: string;
    answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='accordion'>
            <div onClick={toggleAccordion} className='accordion-header'>
                <p className='question'>{question}</p>
                <i className={`bx ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'} icon`} />
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : 'closed'}`}>
                {answer}
            </div>
        </div>
    );
};

export default Accordion;
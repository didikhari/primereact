import React = require("react");

interface AccordionTabProps {
    header?: string;
}

export class AccordionTab extends React.Component<AccordionTabProps,any> {}

interface AccordionProps {
    id?: string;
    activeIndex?: any;
    className?: string;
    style?: object;
    multiple?: boolean;
    onTabOpen?(originalEvent: Event, index: number): void;
    onTabClose?(originalEvent: Event, index: number): void;
}

export class Accordion extends React.Component<AccordionProps,any> {}
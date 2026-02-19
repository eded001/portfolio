declare module "@/components/ui/select" {
    import * as React from "react";

    type SelectProps = {
        value?: string;
        onValueChange?: (value: string) => void;
        children?: React.ReactNode;
    };

    export function Select(props: SelectProps & React.HTMLAttributes<HTMLElement>): JSX.Element;
    export function SelectTrigger(props: { children?: React.ReactNode } & React.HTMLAttributes<HTMLElement>): JSX.Element;
    export function SelectValue(props: { placeholder?: string } & React.HTMLAttributes<HTMLElement>): JSX.Element;
    export function SelectContent(props: { children?: React.ReactNode; position?: string } & React.HTMLAttributes<HTMLElement>): JSX.Element;
    export function SelectGroup(props: { children?: React.ReactNode } & React.HTMLAttributes<HTMLElement>): JSX.Element;
    export function SelectItem(props: { value: string; children?: React.ReactNode } & React.HTMLAttributes<HTMLElement>): JSX.Element;
}
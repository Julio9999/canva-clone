import { cn } from "@/libs/cn";
import { FaSolidChevronDown } from 'solid-icons/fa'

import type {
	AccordionContentProps,
	AccordionItemProps,
	AccordionTriggerProps,
} from "@kobalte/core/accordion";
import { Accordion as AccordionPrimitive } from "@kobalte/core/accordion";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { type ParentProps, type ValidComponent, splitProps } from "solid-js";

export const Accordion = AccordionPrimitive;

type accordionItemProps<T extends ValidComponent = "div"> =
	AccordionItemProps<T> & {
		class?: string;
	};

export const AccordionItem = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, accordionItemProps<T>>,
) => {
	const [local, rest] = splitProps(props as accordionItemProps, ["class"]);

	return (
		<AccordionPrimitive.Item class={cn("border-b", local.class)} {...rest} />
	);
};

type accordionTriggerProps<T extends ValidComponent = "button"> = ParentProps<
	AccordionTriggerProps<T> & {
		class?: string;
	}
>;

export const AccordionTrigger = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, accordionTriggerProps<T>>,
) => {
	const [local, rest] = splitProps(props as accordionTriggerProps, [
		"class",
		"children",
	]);

	return (
		<AccordionPrimitive.Header class="flex" as="div">
			<AccordionPrimitive.Trigger
				class={cn(
					"flex flex-1 items-center justify-between py-4 text-sm font-medium transition-shadow  focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring [&[data-expanded]>svg]:rotate-180",
					local.class,
				)}
				{...rest}
			>
				{local.children}
				<FaSolidChevronDown />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
};

type accordionContentProps<T extends ValidComponent = "div"> = ParentProps<
	AccordionContentProps<T> & {
		class?: string;
	}
>;

export const AccordionContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, accordionContentProps<T>>,
) => {
	const [local, rest] = splitProps(props as accordionContentProps, [
		"class",
		"children",
	]);

	return (
		<AccordionPrimitive.Content
			class={cn(
				"animate-accordion-up overflow-hidden text-sm data-[expanded]:animate-accordion-down",
				local.class,
			)}
			{...rest}
		>
			<div class="pb-4 pt-0">{local.children}</div>
		</AccordionPrimitive.Content>
	);
};

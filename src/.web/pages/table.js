/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { ArrowDownAZIcon as LucideArrowDownAZIcon, ArrowDownToLineIcon as LucideArrowDownToLineIcon, ArrowDownZAIcon as LucideArrowDownZAIcon, BanIcon as LucideBanIcon, BookOpenIcon as LucideBookOpenIcon, CalendarIcon as LucideCalendarIcon, CheckIcon as LucideCheckIcon, ChevronLeftIcon as LucideChevronLeftIcon, ChevronRightIcon as LucideChevronRightIcon, ChevronsLeftIcon as LucideChevronsLeftIcon, ChevronsRightIcon as LucideChevronsRightIcon, DollarSignIcon as LucideDollarSignIcon, HomeIcon as LucideHomeIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, LoaderIcon as LucideLoaderIcon, MoonIcon as LucideMoonIcon, NotebookPenIcon as LucideNotebookPenIcon, SearchIcon as LucideSearchIcon, SettingsIcon as LucideSettingsIcon, SunIcon as LucideSunIcon, Table2Icon as LucideTable2Icon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Select as RadixThemesSelect, Table as RadixThemesTable, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "/utils/theme.js"
import NextLink from "next/link"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



export function Textfield__slot_f0f2802c93e940f52eef8e4080c83030 () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_56af215a02b20c0d1ccfb35703320b05 = useCallback((...args) => addEvents([Event("reflex___state____state.defimoney_monitor___backend___table_state____table_state.setvar", {var_name:`search_value`,value:``})], args, {}), [addEvents, Event])


  return (
    <RadixThemesTextField.Slot css={{"justify": "end", "cursor": "pointer", "display": isTrue(reflex___state____state__defimoney_monitor___backend___table_state____table_state.search_value) ? `flex` : `none`}} onClick={on_click_56af215a02b20c0d1ccfb35703320b05}>
  <LucideXIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesTextField.Slot>
  )
}

export function Theme_fe2ed635f3af7c2bd1ce97e41cbac886 () {
  const reflex___state____state__defimoney_monitor___templates___template____theme_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___templates___template____theme_state)



  return (
    <RadixThemesTheme accentColor={reflex___state____state__defimoney_monitor___templates___template____theme_state.accent_color} css={{...theme.styles.global[':root'], ...theme.styles.global.body}} grayColor={reflex___state____state__defimoney_monitor___templates___template____theme_state.gray_color} hasBackground={true} radius={reflex___state____state__defimoney_monitor___templates___template____theme_state.radius} scaling={reflex___state____state__defimoney_monitor___templates___template____theme_state.scaling}>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column"}, "@media screen and (min-width: 30em)": {"flexDirection": "column"}, "@media screen and (min-width: 48em)": {"flexDirection": "column"}, "@media screen and (min-width: 62em)": {"flexDirection": "column"}, "@media screen and (min-width: 80em)": {"flexDirection": "column"}, "@media screen and (min-width: 96em)": {"flexDirection": "row"}, "width": "100%", "margin": "auto", "position": "relative"}}>
  <nav css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}, "@media screen and (min-width: 80em)": {"display": "block"}, "@media screen and (min-width: 96em)": {"display": "none"}, "position": "sticky", "backgroundColor": "var(--gray-1)", "top": "0px", "zIndex": "5", "borderBottom": "1px solid var(--gray-5)"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%", "paddingTop": "1.25em", "paddingBottom": "1.25em", "@media screen and (min-width: 0)": {"paddingInlineStart": "1em", "paddingInlineEnd": "1em"}, "@media screen and (min-width: 30em)": {"paddingInlineStart": "1em", "paddingInlineEnd": "1em"}, "@media screen and (min-width: 48em)": {"paddingInlineStart": "2em", "paddingInlineEnd": "2em"}}} direction={`row`} gap={`3`}>
  <Fragment_63ee95c1470dfb16f8a2ceb9077f149f/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</nav>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "none"}, "@media screen and (min-width: 80em)": {"display": "none"}, "@media screen and (min-width: 96em)": {"display": "flex"}, "maxWidth": "32em", "width": "auto", "height": "100%", "position": "sticky", "top": "0px", "left": "0px", "flex": "1", "background": "var(--gray-2)"}} justify={`end`}>
  <RadixThemesFlex align={`end`} className={`rx-Stack`} css={{"width": "16em", "height": "100dvh", "padding": "1em"}} direction={`column`} justify={`end`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%", "padding": "0.35em", "marginBottom": "1em"}} direction={`row`} gap={`3`}>
  <Fragment_9b2cc135edf4ecc0844a9fb996d68897/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`1`}>
  <Link_a19a8e5dcb03112480586ca9e7c1c113/>
  <Link_2cbccb12f31a4cef4ab0d4dcebf49cbc/>
  <Link_94fdf907a841056b7cad7bd19aedc155/>
  <Link_331e4d896336963343df698ec4cef540/>
  <Link_250af228bba1fcdd4929a34d36a111ff/>
  <Link_3cf6452552f8c1d4c00c7cd99073ec98/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%", "padding": "0.35em"}} direction={`row`} justify={`start`} gap={`3`}>
  <RadixThemesLink asChild={true} color={`gray`} css={{"&:hover": {"color": "var(--accent-8)"}}} underline={`none`}>
  <NextLink href={`https://reflex.dev/docs/getting-started/introduction/`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Docs`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} color={`gray`} css={{"&:hover": {"color": "var(--accent-8)"}}} underline={`none`}>
  <NextLink href={`https://reflex.dev/blog/`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Blog`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Iconbutton_65a261390a876831a86bb3a665e35ca3/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%", "@media screen and (min-width: 0)": {"paddingTop": "1em", "paddingInlineStart": "auto", "paddingInlineEnd": "auto", "maxWidth": "100%"}, "@media screen and (min-width: 30em)": {"paddingTop": "1em", "paddingInlineStart": "auto", "paddingInlineEnd": "auto", "maxWidth": "100%"}, "@media screen and (min-width: 48em)": {"paddingTop": "2em", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "maxWidth": "100%"}, "@media screen and (min-width: 62em)": {"maxWidth": "100%"}, "@media screen and (min-width: 80em)": {"maxWidth": "100%"}, "@media screen and (min-width: 96em)": {"maxWidth": "1480px"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "padding": "1em", "marginBottom": "2em", "minHeight": "90vh"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`8`}>
  <RadixThemesHeading size={`5`}>
  {`Table`}
</RadixThemesHeading>
  <RadixThemesBox css={{"width": "100%"}}>
  <RadixThemesFlex css={{"width": "100%", "paddingBottom": "1em"}} justify={`between`} gap={`3`} wrap={`wrap`}>
  <RadixThemesFlex align={`center`} justify={`end`} gap={`3`}>
  <Fragment_ac68ce04284ad36df5eebc04e16beaaa/>
  <Select__root_db80cacbaeedfcc5216b9259811acec5/>
  <Debounceinput_bd00ec88da09d1cb0536f6edac28c86a/>
</RadixThemesFlex>
  <Button_53c219a64c53a6328a118a6e5f14d16d/>
</RadixThemesFlex>
  <RadixThemesTable.Root css={{"width": "100%"}} size={`3`} variant={`surface`}>
  <RadixThemesTable.Header>
  <RadixThemesTable.Row>
  <RadixThemesTable.ColumnHeaderCell>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`2`}>
  <LucideUserIcon css={{"color": "var(--current-color)"}} size={18}/>
  <RadixThemesText as={`p`}>
  {`Name`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`2`}>
  <LucideDollarSignIcon css={{"color": "var(--current-color)"}} size={18}/>
  <RadixThemesText as={`p`}>
  {`Payment`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`2`}>
  <LucideCalendarIcon css={{"color": "var(--current-color)"}} size={18}/>
  <RadixThemesText as={`p`}>
  {`Date`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`2`}>
  <LucideNotebookPenIcon css={{"color": "var(--current-color)"}} size={18}/>
  <RadixThemesText as={`p`}>
  {`Status`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <Table__body_493c2fa4d2d1e73934beca98b93b3f43/>
</RadixThemesTable.Root>
  <Fragment>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"marginTop": "1em", "width": "100%"}} direction={`row`} justify={`end`} gap={`5`}>
  <Text_c2acd8421c7c831cce4c73d18f9ff888/>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} justify={`end`} gap={`2`}>
  <Iconbutton_7e23b77d93d4395d502e7d2622726271/>
  <Iconbutton_0e8e0af2860cb8acfa267661c90bf8f9/>
  <Iconbutton_5986499117ea4ab3e883ea195fc51828/>
  <Iconbutton_89415060d7b08697ddda726a16aaf32a/>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTheme>
  )
}

export function Debounceinput_bd00ec88da09d1cb0536f6edac28c86a () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_c442124b89396244aebff65ee7522cac = useCallback((_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___backend___table_state____table_state.set_search_value", {value:_e0.target.value})], [_e0], {}), [addEvents, Event])


  return (
    <DebounceInput color={`gray`} css={{"@media screen and (min-width: 0)": {"maxWidth": "150px"}, "@media screen and (min-width: 30em)": {"maxWidth": "150px"}, "@media screen and (min-width: 48em)": {"maxWidth": "200px"}, "@media screen and (min-width: 62em)": {"maxWidth": "250px"}, "width": "100%"}} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_c442124b89396244aebff65ee7522cac} placeholder={`Search here...`} size={`3`} value={reflex___state____state__defimoney_monitor___backend___table_state____table_state.search_value} variant={`surface`}>
  <RadixThemesTextField.Slot>
  <LucideSearchIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesTextField.Slot>
  <Textfield__slot_f0f2802c93e940f52eef8e4080c83030/>
</DebounceInput>
  )
}

export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Text_c2acd8421c7c831cce4c73d18f9ff888 () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)



  return (
    <RadixThemesText as={`p`} css={{"justify": "end"}}>
  {`Page `}
  <Code_92375d40a4a1e754649e3bc5886b5e20/>
  {` of ${reflex___state____state__defimoney_monitor___backend___table_state____table_state.total_pages}`}
</RadixThemesText>
  )
}

export function Iconbutton_7e23b77d93d4395d502e7d2622726271 () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_e7d4ec5232440c4da0e43cd4e5ca70fb = useCallback((...args) => addEvents([Event("reflex___state____state.defimoney_monitor___backend___table_state____table_state.first_page", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesIconButton color={isTrue(((reflex___state____state__defimoney_monitor___backend___table_state____table_state.page_number) === (1))) ? `gray` : `accent`} css={{"padding": "6px", "opacity": isTrue(((reflex___state____state__defimoney_monitor___backend___table_state____table_state.page_number) === (1))) ? 0.6 : 1}} onClick={on_click_e7d4ec5232440c4da0e43cd4e5ca70fb} variant={`soft`}>
  <LucideChevronsLeftIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesIconButton>
  )
}

export function Link_94fdf907a841056b7cad7bd19aedc155 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "&:hover": {"color": "var(--accent-8)"}}} underline={`none`}>
  <NextLink href={`/about`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"&:hover": {"backgroundColor": isTrue((((reflex___state____state.router.page.path) === ("/about")) || ((((reflex___state____state.router.page.path) === ("/")) && ("About")) === ("Overview")))) ? `var(--accent-3)` : `var(--gray-3)`, "color": isTrue((((reflex___state____state.router.page.path) === ("/about")) || ((((reflex___state____state.router.page.path) === ("/")) && ("About")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "opacity": "1"}, "opacity": isTrue((((reflex___state____state.router.page.path) === ("/about")) || ((((reflex___state____state.router.page.path) === ("/")) && ("About")) === ("Overview")))) ? `1` : `0.95`, "color": isTrue((((reflex___state____state.router.page.path) === ("/about")) || ((((reflex___state____state.router.page.path) === ("/")) && ("About")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "var(--radius-2)", "width": "100%", "padding": "0.35em"}} direction={`row`} gap={`2`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(`About`)) {
                case JSON.stringify(`Overview`):
                return <LucideHomeIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Table`):
                return <LucideTable2Icon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`About`):
                return <LucideBookOpenIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Profile`):
                return <LucideUserIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Settings`):
                return <LucideSettingsIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={`p`} size={`3`} weight={`regular`}>
  {`About`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Table__body_493c2fa4d2d1e73934beca98b93b3f43 () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)



  return (
    <RadixThemesTable.Body>
  {reflex___state____state__defimoney_monitor___backend___table_state____table_state.get_current_page.map((item, index) => (
  <RadixThemesTable.Row align={`center`} css={{"&:hover": {"background": isTrue((((index) % (2)) === (0))) ? `var(--gray-3)` : `var(--accent-3)`}, "background": isTrue((((index) % (2)) === (0))) ? `var(--gray-1)` : `var(--accent-2)`}} key={index}>
  <RadixThemesTable.RowHeaderCell>
  {item.name}
</RadixThemesTable.RowHeaderCell>
  <RadixThemesTable.Cell>
  {`$${item.payment}`}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {item.date}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(item.status)) {
                case JSON.stringify(`Completed`):
                return <RadixThemesBadge color={`green`} radius={`large`} size={`2`} variant={`surface`}>
  <LucideCheckIcon css={{"color": "var(--current-color)"}} size={16}/>
  {`Completed`}
</RadixThemesBadge>;
                break;
                case JSON.stringify(`Pending`):
                return <RadixThemesBadge color={`yellow`} radius={`large`} size={`2`} variant={`surface`}>
  <LucideLoaderIcon css={{"color": "var(--current-color)"}} size={16}/>
  {`Pending`}
</RadixThemesBadge>;
                break;
                case JSON.stringify(`Canceled`):
                return <RadixThemesBadge color={`red`} radius={`large`} size={`2`} variant={`surface`}>
  <LucideBanIcon css={{"color": "var(--current-color)"}} size={16}/>
  {`Canceled`}
</RadixThemesBadge>;
                break;
            default:
                return <RadixThemesBadge color={`yellow`} radius={`large`} size={`2`} variant={`surface`}>
  <LucideLoaderIcon css={{"color": "var(--current-color)"}} size={16}/>
  {`Pending`}
</RadixThemesBadge>;
                break;
        }
    })()
  }
</Fragment>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
  )
}

export function Code_92375d40a4a1e754649e3bc5886b5e20 () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)



  return (
    <RadixThemesCode>
  {reflex___state____state__defimoney_monitor___backend___table_state____table_state.page_number}
</RadixThemesCode>
  )
}

export function Link_331e4d896336963343df698ec4cef540 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "&:hover": {"color": "var(--accent-8)"}}} underline={`none`}>
  <NextLink href={`/profile`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"&:hover": {"backgroundColor": isTrue((((reflex___state____state.router.page.path) === ("/profile")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Profile")) === ("Overview")))) ? `var(--accent-3)` : `var(--gray-3)`, "color": isTrue((((reflex___state____state.router.page.path) === ("/profile")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Profile")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "opacity": "1"}, "opacity": isTrue((((reflex___state____state.router.page.path) === ("/profile")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Profile")) === ("Overview")))) ? `1` : `0.95`, "color": isTrue((((reflex___state____state.router.page.path) === ("/profile")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Profile")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "var(--radius-2)", "width": "100%", "padding": "0.35em"}} direction={`row`} gap={`2`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(`Profile`)) {
                case JSON.stringify(`Overview`):
                return <LucideHomeIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Table`):
                return <LucideTable2Icon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`About`):
                return <LucideBookOpenIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Profile`):
                return <LucideUserIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Settings`):
                return <LucideSettingsIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={`p`} size={`3`} weight={`regular`}>
  {`Profile`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_a19a8e5dcb03112480586ca9e7c1c113 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "&:hover": {"color": "var(--accent-8)"}}} underline={`none`}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"&:hover": {"backgroundColor": isTrue((((reflex___state____state.router.page.path) === ("/")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Overview")) === ("Overview")))) ? `var(--accent-3)` : `var(--gray-3)`, "color": isTrue((((reflex___state____state.router.page.path) === ("/")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Overview")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "opacity": "1"}, "opacity": isTrue((((reflex___state____state.router.page.path) === ("/")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Overview")) === ("Overview")))) ? `1` : `0.95`, "color": isTrue((((reflex___state____state.router.page.path) === ("/")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Overview")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "var(--radius-2)", "width": "100%", "padding": "0.35em"}} direction={`row`} gap={`2`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(`Overview`)) {
                case JSON.stringify(`Overview`):
                return <LucideHomeIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Table`):
                return <LucideTable2Icon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`About`):
                return <LucideBookOpenIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Profile`):
                return <LucideUserIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Settings`):
                return <LucideSettingsIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={`p`} size={`3`} weight={`regular`}>
  {`Overview`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Button_53c219a64c53a6328a118a6e5f14d16d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_74b0f353be8e866b052301692b0b2d73 = useCallback((...args) => addEvents([Event("_download", {url:`/items.csv`,filename:`items.csv`})], args, {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "flex"}}} onClick={on_click_74b0f353be8e866b052301692b0b2d73} size={`3`} variant={`surface`}>
  <LucideArrowDownToLineIcon css={{"color": "var(--current-color)"}} size={20}/>
  {`Export`}
</RadixThemesButton>
  )
}

export function Fragment_63ee95c1470dfb16f8a2ceb9077f149f () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <img css={{"height": "1em"}} src={`/reflex_black.svg`}/>
</Fragment>
) : (
  <Fragment>
  <img css={{"height": "1em"}} src={`/reflex_white.svg`}/>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_2e0e6a4a3aec4136eedf42fc142b7aae () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <LucideSunIcon css={{"color": "var(--current-color)"}}/>
</Fragment>
) : (
  <Fragment>
  <LucideMoonIcon css={{"color": "var(--current-color)"}}/>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_ac68ce04284ad36df5eebc04e16beaaa () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___backend___table_state____table_state.sort_reverse) ? (
  <Fragment>
  <LucideArrowDownZAIcon css={{"strokeWidth": 1.5, "cursor": "pointer", "flexShrink": "0", "color": "var(--current-color)"}} onClick={(...args) => addEvents([Event("reflex___state____state.defimoney_monitor___backend___table_state____table_state.toggle_sort", {})], args, {})} size={28}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowDownAZIcon css={{"strokeWidth": 1.5, "cursor": "pointer", "flexShrink": "0", "color": "var(--current-color)"}} onClick={(...args) => addEvents([Event("reflex___state____state.defimoney_monitor___backend___table_state____table_state.toggle_sort", {})], args, {})} size={28}/>
</Fragment>
)}
</Fragment>
  )
}

export function Link_3cf6452552f8c1d4c00c7cd99073ec98 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "&:hover": {"color": "var(--accent-8)"}}} underline={`none`}>
  <NextLink href={`/auth`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"&:hover": {"backgroundColor": isTrue((((reflex___state____state.router.page.path) === ("/auth")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Auth")) === ("Overview")))) ? `var(--accent-3)` : `var(--gray-3)`, "color": isTrue((((reflex___state____state.router.page.path) === ("/auth")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Auth")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "opacity": "1"}, "opacity": isTrue((((reflex___state____state.router.page.path) === ("/auth")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Auth")) === ("Overview")))) ? `1` : `0.95`, "color": isTrue((((reflex___state____state.router.page.path) === ("/auth")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Auth")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "var(--radius-2)", "width": "100%", "padding": "0.35em"}} direction={`row`} gap={`2`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(`Auth`)) {
                case JSON.stringify(`Overview`):
                return <LucideHomeIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Table`):
                return <LucideTable2Icon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`About`):
                return <LucideBookOpenIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Profile`):
                return <LucideUserIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Settings`):
                return <LucideSettingsIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={`p`} size={`3`} weight={`regular`}>
  {`Auth`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Link_250af228bba1fcdd4929a34d36a111ff () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "&:hover": {"color": "var(--accent-8)"}}} underline={`none`}>
  <NextLink href={`/settings`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"&:hover": {"backgroundColor": isTrue((((reflex___state____state.router.page.path) === ("/settings")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Settings")) === ("Overview")))) ? `var(--accent-3)` : `var(--gray-3)`, "color": isTrue((((reflex___state____state.router.page.path) === ("/settings")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Settings")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "opacity": "1"}, "opacity": isTrue((((reflex___state____state.router.page.path) === ("/settings")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Settings")) === ("Overview")))) ? `1` : `0.95`, "color": isTrue((((reflex___state____state.router.page.path) === ("/settings")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Settings")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "var(--radius-2)", "width": "100%", "padding": "0.35em"}} direction={`row`} gap={`2`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(`Settings`)) {
                case JSON.stringify(`Overview`):
                return <LucideHomeIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Table`):
                return <LucideTable2Icon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`About`):
                return <LucideBookOpenIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Profile`):
                return <LucideUserIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Settings`):
                return <LucideSettingsIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={`p`} size={`3`} weight={`regular`}>
  {`Settings`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Select__root_db80cacbaeedfcc5216b9259811acec5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_ff34a8578e5afbac148502c03ae9790e = useCallback((_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___backend___table_state____table_state.set_sort_value", {value:_e0})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesSelect.Root onValueChange={on_change_ff34a8578e5afbac148502c03ae9790e} size={`3`}>
  <RadixThemesSelect.Trigger placeholder={`Sort By: Name`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`name`}>
  {`name`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`payment`}>
  {`payment`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`date`}>
  {`date`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`status`}>
  {`status`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  )
}

export function Iconbutton_65a261390a876831a86bb3a665e35ca3 () {
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])


  return (
    <RadixThemesIconButton css={{"padding": "6px", "opacity": "0.8", "scale": "0.95", "background": "transparent", "color": "inherit", "zIndex": "20", "&:hover": {"cursor": "pointer"}}} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>
  <Fragment_2e0e6a4a3aec4136eedf42fc142b7aae/>
</RadixThemesIconButton>
  )
}

export function Iconbutton_0e8e0af2860cb8acfa267661c90bf8f9 () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_a913c11afdab9ab6e7decf5f8e3a1739 = useCallback((...args) => addEvents([Event("reflex___state____state.defimoney_monitor___backend___table_state____table_state.prev_page", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesIconButton color={isTrue(((reflex___state____state__defimoney_monitor___backend___table_state____table_state.page_number) === (1))) ? `gray` : `accent`} css={{"padding": "6px", "opacity": isTrue(((reflex___state____state__defimoney_monitor___backend___table_state____table_state.page_number) === (1))) ? 0.6 : 1}} onClick={on_click_a913c11afdab9ab6e7decf5f8e3a1739} variant={`soft`}>
  <LucideChevronLeftIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesIconButton>
  )
}

export function Toaster_6e90e5e87a1cac8c96c683214079bef3 () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Link_2cbccb12f31a4cef4ab0d4dcebf49cbc () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "&:hover": {"color": "var(--accent-8)"}}} underline={`none`}>
  <NextLink href={`/table`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"&:hover": {"backgroundColor": isTrue((((reflex___state____state.router.page.path) === ("/table")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Table")) === ("Overview")))) ? `var(--accent-3)` : `var(--gray-3)`, "color": isTrue((((reflex___state____state.router.page.path) === ("/table")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Table")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "opacity": "1"}, "opacity": isTrue((((reflex___state____state.router.page.path) === ("/table")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Table")) === ("Overview")))) ? `1` : `0.95`, "color": isTrue((((reflex___state____state.router.page.path) === ("/table")) || ((((reflex___state____state.router.page.path) === ("/")) && ("Table")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "var(--radius-2)", "width": "100%", "padding": "0.35em"}} direction={`row`} gap={`2`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(`Table`)) {
                case JSON.stringify(`Overview`):
                return <LucideHomeIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Table`):
                return <LucideTable2Icon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`About`):
                return <LucideBookOpenIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Profile`):
                return <LucideUserIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
                case JSON.stringify(`Settings`):
                return <LucideSettingsIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
            default:
                return <LucideLayoutDashboardIcon css={{"color": "var(--current-color)"}} size={18}/>;
                break;
        }
    })()
  }
</Fragment>
  <RadixThemesText as={`p`} size={`3`} weight={`regular`}>
  {`Table`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_9b2cc135edf4ecc0844a9fb996d68897 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <img css={{"height": "1.5em"}} src={`/reflex_black.svg`}/>
</Fragment>
) : (
  <Fragment>
  <img css={{"height": "1.5em"}} src={`/reflex_white.svg`}/>
</Fragment>
)}
</Fragment>
  )
}

                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>
  <p>
  {`Ooops...Unknown Reflex error has occured:`}
</p>
  <p css={{"color": "red"}}>
  {error.message}
</p>
  <p>
  {`Please contact the support.`}
</p>
</div>
                    );
                }
            

export function Iconbutton_89415060d7b08697ddda726a16aaf32a () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_38e2a3799e6d27831343dd41ef88d980 = useCallback((...args) => addEvents([Event("reflex___state____state.defimoney_monitor___backend___table_state____table_state.last_page", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesIconButton color={isTrue(((reflex___state____state__defimoney_monitor___backend___table_state____table_state.page_number) === (reflex___state____state__defimoney_monitor___backend___table_state____table_state.total_pages))) ? `gray` : `accent`} css={{"padding": "6px", "opacity": isTrue(((reflex___state____state__defimoney_monitor___backend___table_state____table_state.page_number) === (reflex___state____state__defimoney_monitor___backend___table_state____table_state.total_pages))) ? 0.6 : 1}} onClick={on_click_38e2a3799e6d27831343dd41ef88d980} variant={`soft`}>
  <LucideChevronsRightIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesIconButton>
  )
}

export function Iconbutton_5986499117ea4ab3e883ea195fc51828 () {
  const reflex___state____state__defimoney_monitor___backend___table_state____table_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_0c65b7f0fd23c9c3a0e0b20de3509eea = useCallback((...args) => addEvents([Event("reflex___state____state.defimoney_monitor___backend___table_state____table_state.next_page", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesIconButton color={isTrue(((reflex___state____state__defimoney_monitor___backend___table_state____table_state.page_number) === (reflex___state____state__defimoney_monitor___backend___table_state____table_state.total_pages))) ? `gray` : `accent`} css={{"padding": "6px", "opacity": isTrue(((reflex___state____state__defimoney_monitor___backend___table_state____table_state.page_number) === (reflex___state____state__defimoney_monitor___backend___table_state____table_state.total_pages))) ? 0.6 : 1}} onClick={on_click_0c65b7f0fd23c9c3a0e0b20de3509eea} variant={`soft`}>
  <LucideChevronRightIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesIconButton>
  )
}

export default function Component() {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
    const logFrontendError = (error, info) => {
        if (process.env.NODE_ENV === "production") {
            addEvents([Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", {
                stack: error.stack,
            })])
        }
    }
    

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={logFrontendError}>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_6e90e5e87a1cac8c96c683214079bef3/>
</Fragment>
  <Theme_fe2ed635f3af7c2bd1ce97e41cbac886/>
  <NextHead>
  <title>
  {`Table`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</ErrorBoundary>
  )
}

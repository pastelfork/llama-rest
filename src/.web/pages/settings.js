/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { BlendIcon as LucideBlendIcon, BookOpenIcon as LucideBookOpenIcon, CheckIcon as LucideCheckIcon, HomeIcon as LucideHomeIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, MoonIcon as LucideMoonIcon, PaletteIcon as LucidePaletteIcon, RadiusIcon as LucideRadiusIcon, RulerIcon as LucideRulerIcon, SettingsIcon as LucideSettingsIcon, SunIcon as LucideSunIcon, Table2Icon as LucideTable2Icon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Select as RadixThemesSelect, Text as RadixThemesText, Theme as RadixThemesTheme, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import theme from "/utils/theme.js"
import NextLink from "next/link"
import NextHead from "next/head"



export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Select__root_aa9daae5a2ab814f6b35cb1eb0bb8c86 () {
  const reflex___state____state__defimoney_monitor___templates___template____theme_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___templates___template____theme_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_b27949310e312cc6d2de396aac64482b = useCallback((_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___templates___template____theme_state.set_scaling", {value:_e0})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesSelect.Root onValueChange={on_change_b27949310e312cc6d2de396aac64482b} size={`3`} value={reflex___state____state__defimoney_monitor___templates___template____theme_state.scaling}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`90%`}>
  {`90%`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`95%`}>
  {`95%`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`100%`}>
  {`100%`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`105%`}>
  {`105%`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`110%`}>
  {`110%`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
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

export function Select__root_2fa7919ca3799a86ed5a42a755464ab7 () {
  const reflex___state____state__defimoney_monitor___templates___template____theme_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___templates___template____theme_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_da6520109f87acfd920232dc1d0f48ba = useCallback((_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___templates___template____theme_state.set_radius", {value:_e0})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesSelect.Root onValueChange={on_change_da6520109f87acfd920232dc1d0f48ba} size={`3`} value={reflex___state____state__defimoney_monitor___templates___template____theme_state.radius}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`none`}>
  {`none`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`small`}>
  {`small`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`medium`}>
  {`medium`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`large`}>
  {`large`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`full`}>
  {`full`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
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


export function Theme_e5219c00336c7da530f0e3d0a0c8db6c () {
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
  <Link_c914b6a335fa88c7254251adc6c67dd2/>
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
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`7`}>
  <RadixThemesHeading size={`5`}>
  {`Settings`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucidePaletteIcon css={{"color": "var(--accent-10)"}}/>
  <RadixThemesHeading size={`6`}>
  {`Primary color`}
</RadixThemesHeading>
</RadixThemesFlex>
  <Flex_cff6625d8811d8ba856025d9c24bba32/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideBlendIcon css={{"color": "var(--gray-11)"}}/>
  <RadixThemesHeading size={`6`}>
  {`Secondary color`}
</RadixThemesHeading>
</RadixThemesFlex>
  <Flex_be51409b799c955d2e6bd62094cc3b78/>
</RadixThemesFlex>
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideRadiusIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesHeading size={`6`}>
  {`Radius`}
</RadixThemesHeading>
</RadixThemesFlex>
  <Select__root_2fa7919ca3799a86ed5a42a755464ab7/>
</RadixThemesFlex>
</Fragment>
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideRulerIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesHeading size={`6`}>
  {`Scaling`}
</RadixThemesHeading>
</RadixThemesFlex>
  <Select__root_aa9daae5a2ab814f6b35cb1eb0bb8c86/>
</RadixThemesFlex>
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTheme>
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

export function Flex_cff6625d8811d8ba856025d9c24bba32 () {
  const reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__defimoney_monitor___templates___template____theme_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___templates___template____theme_state)



  return (
    <RadixThemesFlex css={{"width": "100%", "maxWidth": "40rem", "@media screen and (min-width: 0)": {"gap": "15px"}, "@media screen and (min-width: 30em)": {"gap": "15px"}, "@media screen and (min-width: 48em)": {"gap": "20px"}}} wrap={`wrap`}>
  {Object.entries(reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state.primary_color_options).map((color, index_f840bada45507afb) => (
  <RadixThemesTooltip content={color.at(0)} key={index_f840bada45507afb}>
  <RadixThemesBox onClick={(...args) => addEvents([Event("reflex___state____state.defimoney_monitor___templates___template____theme_state.setvar", {var_name:`accent_color`,value:color.at(0).toLowerCase()})], args, {})}>
  <Fragment>
  {isTrue(((color.at(0).toLowerCase()) === (reflex___state____state__defimoney_monitor___templates___template____theme_state.accent_color.toLowerCase()))) ? (
  <Fragment>
  <RadixThemesBox css={{"borderRadius": "max(var(--radius-3), var(--radius-full))", "boxShadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform 0.15s ease-in-out", "&:active": {"transform": "translateY(2px) scale(0.95)"}, "background": color.at(1), "@media screen and (min-width: 0)": {"height": "2.25rem", "width": "2.25rem"}, "@media screen and (min-width: 30em)": {"height": "2.25rem", "width": "2.25rem"}, "@media screen and (min-width: 48em)": {"height": "2.5rem", "width": "2.5rem"}, "border": "2px solid  var(--gray-12)"}}>
  <LucideCheckIcon css={{"color": "var(--gray-12)"}}/>
</RadixThemesBox>
</Fragment>
) : (
  <Fragment>
  <RadixThemesBox css={{"borderRadius": "max(var(--radius-3), var(--radius-full))", "boxShadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform 0.15s ease-in-out", "&:active": {"transform": "translateY(2px) scale(0.95)"}, "background": color.at(1), "@media screen and (min-width: 0)": {"height": "2.25rem", "width": "2.25rem"}, "@media screen and (min-width: 30em)": {"height": "2.25rem", "width": "2.25rem"}, "@media screen and (min-width: 48em)": {"height": "2.5rem", "width": "2.5rem"}}}/>
</Fragment>
)}
</Fragment>
</RadixThemesBox>
</RadixThemesTooltip>
))}
</RadixThemesFlex>
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

export function Link_c914b6a335fa88c7254251adc6c67dd2 () {
  const reflex___state____state = useContext(StateContexts.reflex___state____state)



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "&:hover": {"color": "var(--accent-8)"}}} underline={`none`}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"&:hover": {"backgroundColor": isTrue((((reflex___state____state.router.page.path) === ("/")) || ((((reflex___state____state.router.page.path) === ("/")) && ("llama.rest")) === ("Overview")))) ? `var(--accent-3)` : `var(--gray-3)`, "color": isTrue((((reflex___state____state.router.page.path) === ("/")) || ((((reflex___state____state.router.page.path) === ("/")) && ("llama.rest")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "opacity": "1"}, "opacity": isTrue((((reflex___state____state.router.page.path) === ("/")) || ((((reflex___state____state.router.page.path) === ("/")) && ("llama.rest")) === ("Overview")))) ? `1` : `0.95`, "color": isTrue((((reflex___state____state.router.page.path) === ("/")) || ((((reflex___state____state.router.page.path) === ("/")) && ("llama.rest")) === ("Overview")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "var(--radius-2)", "width": "100%", "padding": "0.35em"}} direction={`row`} gap={`2`}>
  <Fragment>
  {
    (() => {
        switch (JSON.stringify(`llama.rest`)) {
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
  {`llama.rest`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
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
            

export function Flex_be51409b799c955d2e6bd62094cc3b78 () {
  const reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__defimoney_monitor___templates___template____theme_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___templates___template____theme_state)



  return (
    <RadixThemesFlex css={{"width": "100%", "maxWidth": "40rem", "@media screen and (min-width: 0)": {"gap": "15px"}, "@media screen and (min-width: 30em)": {"gap": "15px"}, "@media screen and (min-width: 48em)": {"gap": "20px"}}} wrap={`wrap`}>
  {Object.entries(reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state.secondary_color_options).map((colors, index_413041c0f10e3ea7) => (
  <RadixThemesTooltip content={colors.at(0)} key={index_413041c0f10e3ea7}>
  <RadixThemesBox onClick={(...args) => addEvents([Event("reflex___state____state.defimoney_monitor___templates___template____theme_state.setvar", {var_name:`gray_color`,value:colors.at(0).toLowerCase()})], args, {})}>
  <Fragment>
  {isTrue(((colors.at(0).toLowerCase()) === (reflex___state____state__defimoney_monitor___templates___template____theme_state.gray_color.toLowerCase()))) ? (
  <Fragment>
  <RadixThemesBox css={{"borderRadius": "max(var(--radius-3), var(--radius-full))", "boxShadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform 0.15s ease-in-out", "&:active": {"transform": "translateY(2px) scale(0.95)"}, "background": colors.at(1), "@media screen and (min-width: 0)": {"height": "2.25rem", "width": "2.25rem"}, "@media screen and (min-width: 30em)": {"height": "2.25rem", "width": "2.25rem"}, "@media screen and (min-width: 48em)": {"height": "2.5rem", "width": "2.5rem"}, "border": "2px solid  var(--gray-12)"}}>
  <LucideCheckIcon css={{"color": "var(--gray-12)"}}/>
</RadixThemesBox>
</Fragment>
) : (
  <Fragment>
  <RadixThemesBox css={{"borderRadius": "max(var(--radius-3), var(--radius-full))", "boxShadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", "cursor": "pointer", "display": "flex", "alignItems": "center", "justifyContent": "center", "transition": "transform 0.15s ease-in-out", "&:active": {"transform": "translateY(2px) scale(0.95)"}, "background": colors.at(1), "@media screen and (min-width: 0)": {"height": "2.25rem", "width": "2.25rem"}, "@media screen and (min-width: 30em)": {"height": "2.25rem", "width": "2.25rem"}, "@media screen and (min-width: 48em)": {"height": "2.5rem", "width": "2.5rem"}}}/>
</Fragment>
)}
</Fragment>
</RadixThemesBox>
</RadixThemesTooltip>
))}
</RadixThemesFlex>
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
  <Theme_e5219c00336c7da530f0e3d0a0c8db6c/>
  <NextHead>
  <title>
  {`Settings`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</ErrorBoundary>
  )
}

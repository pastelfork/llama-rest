/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { BellIcon as LucideBellIcon, BookOpenIcon as LucideBookOpenIcon, HomeIcon as LucideHomeIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, MailIcon as LucideMailIcon, MoonIcon as LucideMoonIcon, SettingsIcon as LucideSettingsIcon, SquareUserRoundIcon as LucideSquareUserRoundIcon, SunIcon as LucideSunIcon, Table2Icon as LucideTable2Icon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Button as RadixThemesButton, Checkbox as RadixThemesCheckbox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "/utils/theme.js"
import NextLink from "next/link"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


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

export function Theme_b1f32c9261e099890e2b5fbe6bd5a0bb () {
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
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "maxWidth": "800px"}} direction={`column`} gap={`6`}>
  <RadixThemesFlex css={{"width": "100%", "@media screen and (min-width: 0)": {"flexDirection": "column"}, "@media screen and (min-width: 30em)": {"flexDirection": "column"}, "@media screen and (min-width: 48em)": {"flexDirection": "row"}}} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideSquareUserRoundIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesHeading size={`5`}>
  {`Personal information`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesText as={`p`} size={`3`}>
  {`Update your personal information.`}
</RadixThemesText>
</RadixThemesFlex>
  <Root_b15ecf21348900b9895fdd40540ecdb6/>
</RadixThemesFlex>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesFlex css={{"width": "100%", "@media screen and (min-width: 0)": {"flexDirection": "column"}, "@media screen and (min-width: 30em)": {"flexDirection": "column"}, "@media screen and (min-width: 48em)": {"flexDirection": "row"}}} justify={`between`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideBellIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesHeading size={`5`}>
  {`Notifications`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesText as={`p`} size={`3`}>
  {`Manage your notification settings.`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={`label`} size={`3`}>
  <RadixThemesFlex gap={`2`}>
  <Checkbox_99d061141ec4a7c846f252157a04f618/>
  {`Receive product updates`}
</RadixThemesFlex>
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTheme>
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

export function Textfield__root_fe8de02d2d0c8f1427123afca21876d1 () {
  const reflex___state____state__defimoney_monitor___pages___profile____profile_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___profile____profile_state)



  return (
    <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__defimoney_monitor___pages___profile____profile_state.profile.email} name={`email`} placeholder={`user@reflex.dev`} type={`email`}/>
  )
}

export function Textfield__root_fce425736b5608f3ec255d7ef5fe6a95 () {
  const reflex___state____state__defimoney_monitor___pages___profile____profile_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___profile____profile_state)



  return (
    <RadixThemesTextField.Root css={{"width": "100%"}} defaultValue={reflex___state____state__defimoney_monitor___pages___profile____profile_state.profile.name} name={`name`} placeholder={`Admin`} type={`text`}/>
  )
}

export function Root_b15ecf21348900b9895fdd40540ecdb6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  
    const handleSubmit_b29cb70a8af7f802758821e00458d357 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("reflex___state____state.defimoney_monitor___pages___profile____profile_state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    

  return (
    <RadixFormRoot className={`Root `} css={{"width": "100%", "maxWidth": "325px"}} onSubmit={handleSubmit_b29cb70a8af7f802758821e00458d357}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`1`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <LucideUserIcon css={{"strokeWidth": 1.5, "color": "var(--current-color)"}} size={16}/>
  <RadixThemesText as={`p`}>
  {`Name`}
</RadixThemesText>
</RadixThemesFlex>
  <Textfield__root_fce425736b5608f3ec255d7ef5fe6a95/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`1`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <LucideMailIcon css={{"strokeWidth": 1.5, "color": "var(--current-color)"}} size={16}/>
  <RadixThemesText as={`p`}>
  {`Email`}
</RadixThemesText>
</RadixThemesFlex>
  <Textfield__root_fe8de02d2d0c8f1427123afca21876d1/>
</RadixThemesFlex>
  <RadixThemesButton css={{"width": "100%"}} type={`submit`}>
  {`Update`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
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

export function Checkbox_99d061141ec4a7c846f252157a04f618 () {
  const reflex___state____state__defimoney_monitor___pages___profile____profile_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___profile____profile_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_be9cc627d8ae2c5a2b07c08c611fecb2 = useCallback((_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___profile____profile_state.toggle_notifications", {})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesCheckbox checked={reflex___state____state__defimoney_monitor___pages___profile____profile_state.profile.notifications} onCheckedChange={on_change_be9cc627d8ae2c5a2b07c08c611fecb2} size={`3`}/>
  )
}

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
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
  <Theme_b1f32c9261e099890e2b5fbe6bd5a0bb/>
  <NextHead>
  <title>
  {`Profile`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</ErrorBoundary>
  )
}

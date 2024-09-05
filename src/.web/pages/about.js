/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { BookOpenIcon as LucideBookOpenIcon, HomeIcon as LucideHomeIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, MoonIcon as LucideMoonIcon, SettingsIcon as LucideSettingsIcon, SunIcon as LucideSunIcon, Table2Icon as LucideTable2Icon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Code as RadixThemesCode, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "/utils/theme.js"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import "katex/dist/katex.min.css"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import NextHead from "next/head"



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

        function ComponentMap_d38e29d2c702ae9f2a0cb8029e36eb87 () {
            const { resolvedColorMode } = useContext(ColorModeContext)
            return (
                {"h1": ({node, children, ...props}) => <RadixThemesHeading as={`h1`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`6`} {...props}>  {children}</RadixThemesHeading>, "h2": ({node, children, ...props}) => <RadixThemesHeading as={`h2`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`5`} {...props}>  {children}</RadixThemesHeading>, "h3": ({node, children, ...props}) => <RadixThemesHeading as={`h3`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`4`} {...props}>  {children}</RadixThemesHeading>, "h4": ({node, children, ...props}) => <RadixThemesHeading as={`h4`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`3`} {...props}>  {children}</RadixThemesHeading>, "h5": ({node, children, ...props}) => <RadixThemesHeading as={`h5`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`2`} {...props}>  {children}</RadixThemesHeading>, "h6": ({node, children, ...props}) => <RadixThemesHeading as={`h6`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`1`} {...props}>  {children}</RadixThemesHeading>, "p": ({node, children, ...props}) => <RadixThemesText as={`p`} css={{"marginTop": "1em", "marginBottom": "1em"}} {...props}>  {children}</RadixThemesText>, "ul": ({node, children, ...props}) => <ul css={{"listStyleType": "disc", "marginTop": "1em", "marginBottom": "1em", "marginLeft": "1.5rem", "direction": "column"}}>  {children}</ul>, "ol": ({node, children, ...props}) => <ol css={{"listStyleType": "decimal", "marginTop": "1em", "marginBottom": "1em", "marginLeft": "1.5rem", "direction": "column"}}>  {children}</ol>, "li": ({node, children, ...props}) => <li css={{"marginTop": "0.5em", "marginBottom": "0.5em"}}>  {children}</li>, "a": ({node, children, ...props}) => <RadixThemesLink css={{"fontWeight": "bold", "textDecoration": "underline", "textDecorationColor": "var(--accent-10)", "&:hover": {"color": "var(--accent-8)"}}} {...props}>  {children}</RadixThemesLink>, "code": ({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <RadixThemesCode color={`gray`} {...props}>  {children}</RadixThemesCode>     ) : (         <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={language} style={isTrue(((resolvedColorMode) === (`light`))) ? oneLight : oneDark} {...props} children={children}/>     );       }, "codeblock": ({node, children, ...props}) => <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={`python`} style={isTrue(((resolvedColorMode) === (`light`))) ? oneLight : oneDark} {...props} children={children}/>}
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

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


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
            

export function Theme_108b00584094a09140c20f5ce3ae86ef () {
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
  <ReactMarkdown rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]} components={ComponentMap_d38e29d2c702ae9f2a0cb8029e36eb87()}>
  {`# Welcome to Reflex!

This is the base Reflex template - installed when you run \`reflex init\`.

If you want to use a different template, pass the \`--template\` flag to \`reflex init\`.
For example, if you want a more basic starting point, you can run:

\`\`\`bash
reflex init --template blank
\`\`\`

## About this Template

This template has the following directory structure:

\`\`\`bash
├── README.md
├── assets
├── rxconfig.py
└── {your_app}
    ├── __init__.py
    ├── components
    │   ├── __init__.py
    │   ├── navbar.py
    │   └── sidebar.py
    ├── pages
    │   ├── __init__.py
    │   ├── about.py
    │   ├── index.py
    │   ├── profile.py
    │   ├── settings.py
    │   └── table.py
    ├── styles.py
    ├── templates
    │   ├── __init__.py
    │   └── template.py
    └── {your_app}.py
\`\`\`

See the [Project Structure docs](https://reflex.dev/docs/getting-started/project-structure/) for more information on general Reflex project structure.

### Adding Pages

In this template, the pages in your app are defined in \`{your_app}/pages/\`.
Each page is a function that returns a Reflex component.
For example, to edit this page you can modify \`{your_app}/pages/index.py\`.
See the [pages docs](https://reflex.dev/docs/pages/routes/) for more information on pages.

In this template, instead of using \`rx.add_page\` or the \`@rx.page\` decorator,
we use the \`@template\` decorator from \`{your_app}/templates/template.py\`.

To add a new page:

1. Add a new file in \`{your_app}/pages/\`. We recommend using one file per page, but you can also group pages in a single file.
2. Add a new function with the \`@template\` decorator, which takes the same arguments as \`@rx.page\`.
3. Import the page in your \`{your_app}/pages/__init__.py\` file and it will automatically be added to the app.
4. Order the pages in \`{your_app}/components/sidebar.py\` and \`{your_app}/components/navbar.py\`.


### Adding Components

In order to keep your code organized, we recommend putting components that are
used across multiple pages in the \`{your_app}/components/\` directory.

In this template, we have a sidebar component in \`{your_app}/components/sidebar.py\`.

### Adding State

As your app grows, we recommend using [substates](https://reflex.dev/docs/substates/overview/)
to organize your state.

You can either define substates in their own files, or if the state is
specific to a page, you can define it in the page file itself.
`}
</ReactMarkdown>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTheme>
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
  <Theme_108b00584094a09140c20f5ce3ae86ef/>
  <NextHead>
  <title>
  {`About`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</ErrorBoundary>
  )
}

/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { CircleCheckIcon as LucideCircleCheckIcon, DollarSignIcon as LucideDollarSignIcon, InfoIcon as LucideInfoIcon, LogOutIcon as LucideLogOutIcon, SearchIcon as LucideSearchIcon, SunMoonIcon as LucideSunMoonIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { AlertDialog as RadixThemesAlertDialog, Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Callout as RadixThemesCallout, Card as RadixThemesCard, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Popover as RadixThemesPopover, ScrollArea as RadixThemesScrollArea, Spinner as RadixThemesSpinner, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, TextField as RadixThemesTextField, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import TelegramLoginButton from "telegram-login-button"
import { DebounceInput } from "react-debounce-input"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Fragment_bc1e24b4c02b802e838772931bb95b5c () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state)
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state)
  const reflex___state____state__defimoney_monitor___pages___index____app_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(!reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.account_bound) ? (
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.account_queried) ? (
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state.user_logged_in) ? (
  <Fragment>
  <RadixThemesButton onClick={(...args) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____account_state.handle_bind_address", {})], args, {})}>
  {`Get notifications for this address`}
</RadixThemesButton>
</Fragment>
) : (
  <Fragment>
  <RadixThemesTooltip content={`You need to be logged in to receive notification.`}>
  <RadixThemesButton disabled={true}>
  {`Get notifications for this address`}
</RadixThemesButton>
</RadixThemesTooltip>
</Fragment>
)}
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_63dcd1e904b67df0929861532875d439 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <img css={{"width": "10em"}} src={`/Defi.Money.Logo.Black.png`}/>
</Fragment>
) : (
  <Fragment>
  <img css={{"width": "10em"}} src={`/Defi.Money.Logo.Sand.png`}/>
</Fragment>
)}
</Fragment>
  )
}

export function Table__body_b0bd2d46e34b9368a32f75f42a495b5e () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state)
  const reflex___state____state__defimoney_monitor___pages___index____app_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state)


  
    const handleSubmit_a2913a891d3d5cb42ac44a924a29d49d = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____account_state.handle_set_notification", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    

  return (
    <RadixThemesTable.Body>
  {reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.optimism_account_states.map((account_market_state, index_d50eb8dd0a8c6179) => (
  <RadixThemesTable.Row align={`center`} key={index_d50eb8dd0a8c6179}>
  <RadixThemesTable.Cell>
  {account_market_state.at(0)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {account_market_state.at(1)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {account_market_state.at(2)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {account_market_state.at(3)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {account_market_state.at(4)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {`$${account_market_state.at(7)} - $${account_market_state.at(6)}`}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state.user_logged_in) ? (
  <Fragment>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(...args) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.handle_managing_notification", {account_market_state:account_market_state})], args, {})}>
  {`Manage`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content onCloseAutoFocus={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})} onEscapeKeyDown={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})} onFocusOutside={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})} onInteractOutside={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})} onPointerDownOutside={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})}>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  <RadixThemesCallout.Root css={{"icon": "info"}} size={`1`}>
  <RadixThemesCallout.Icon>
  <LucideInfoIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesCallout.Icon>
  <RadixThemesCallout.Text>
  {`Conversion to $Money will begin when ${account_market_state.at(0)} drops below $${account_market_state.at(6)}`}
</RadixThemesCallout.Text>
</RadixThemesCallout.Root>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Notify me when ${account_market_state.at(0)} price is below: `}
</RadixThemesText>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_a2913a891d3d5cb42ac44a924a29d49d}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesTextField.Root name={`threshold_price`} placeholder={`1234.56`} type={`number`}>
  <RadixThemesTextField.Slot css={{"paddingLeft": "0"}}>
  <LucideDollarSignIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesTextField.Slot>
</RadixThemesTextField.Root>
  <RadixThemesButton type={`submit`}>
  {`Confirm`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state.threshold_price_set) ? (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`Current notification price: `}
  <RadixThemesBadge color={`green`}>
  {`$${reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state.current_threshold_price}`}
</RadixThemesBadge>
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</Fragment>
) : (
  <Fragment>
  <RadixThemesTooltip content={`You need to be logged in to receive notification.`}>
  <RadixThemesButton disabled={true}>
  {`Manage`}
</RadixThemesButton>
</RadixThemesTooltip>
</Fragment>
)}
</Fragment>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
  )
}

export function Fragment_b55f21ee14dc9741041d03ae3bbb7d1f () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state)



  return (
    <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state.user_logged_in) ? (
  <Fragment>
  <RadixThemesHeading size={`5`}>
  {`Welcome, ${reflex___state____state__defimoney_monitor___pages___index____app_state.current_user_first_name}`}
</RadixThemesHeading>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
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

export function Fragment_bde5d033a84ff03d98d93916e8424609 () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.account_bound) ? (
  <Fragment>
  <RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Trigger>
  <RadixThemesFlex>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <RadixThemesBadge css={{"&:hover": {"cursor": "pointer"}}} highContrast={true} size={`2`} variant={`soft`}>
  {reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.bound_address}
</RadixThemesBadge>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
  <RadixThemesBadge css={{"&:hover": {"cursor": "pointer"}}} highContrast={true} size={`2`} variant={`soft`}>
  {`${reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.bound_address.slice(0, 4)}...${reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.bound_address.slice(-4, undefined)}`}
</RadixThemesBadge>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <RadixThemesDropdownMenu.Item color={`red`} onSelect={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____alert_state.toggle_alert", {event:_e0.target.value})], [_e0], {})}>
  {`Delete account`}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</Fragment>
) : (
  <Fragment/>
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

export function Button_0908926cc22d28095a5e3f4d3da78c00 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_862fc9a92160c79975ff531568c1307c = useCallback((...args) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.delete_account", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesButton color={`red`} onClick={on_click_862fc9a92160c79975ff531568c1307c} variant={`solid`}>
  {`Confirm Deletion`}
</RadixThemesButton>
  )
}

export function Alertdialog__root_75b4ce85183dbcc87ce143ed8bb8f2c0 () {
  const reflex___state____state__defimoney_monitor___pages___index____alert_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____alert_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_open_change_41942f947da867b08dbe876b1a3faef2 = useCallback((_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____alert_state.toggle_alert", {event:_e0})], [_e0], {}), [addEvents, Event])


  return (
    <RadixThemesAlertDialog.Root onOpenChange={on_open_change_41942f947da867b08dbe876b1a3faef2} open={reflex___state____state__defimoney_monitor___pages___index____alert_state.alert_open}>
  <RadixThemesAlertDialog.Content>
  <RadixThemesAlertDialog.Title>
  {`Account Deletion`}
</RadixThemesAlertDialog.Title>
  <RadixThemesAlertDialog.Description css={{"size": "2"}}>
  {`This action will delete your account and permanently erase all your data on llama.rest. You will no longer receive notifications.`}
</RadixThemesAlertDialog.Description>
  <RadixThemesFlex css={{"marginTop": "16px"}} justify={`end`} gap={`3`}>
  <RadixThemesAlertDialog.Cancel>
  <RadixThemesButton color={`gray`} variant={`soft`}>
  {`Cancel`}
</RadixThemesButton>
</RadixThemesAlertDialog.Cancel>
  <RadixThemesAlertDialog.Action>
  <RadixThemesFlex>
  <Button_0908926cc22d28095a5e3f4d3da78c00/>
</RadixThemesFlex>
</RadixThemesAlertDialog.Action>
</RadixThemesFlex>
</RadixThemesAlertDialog.Content>
</RadixThemesAlertDialog.Root>
  )
}

export function Button_c234b7fa9cc5c0783a54d9767fa13370 () {
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])


  return (
    <RadixThemesButton onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8} variant={`ghost`}>
  <LucideSunMoonIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesButton>
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
            

export function Table__body_b79e928b66c1bcd97f14742c209d50d1 () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state)
  const reflex___state____state__defimoney_monitor___pages___index____app_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state)


  
    const handleSubmit_a2913a891d3d5cb42ac44a924a29d49d = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____account_state.handle_set_notification", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    

  return (
    <RadixThemesTable.Body>
  {reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.arbitrum_account_states.map((account_market_state, index_d50eb8dd0a8c6179) => (
  <RadixThemesTable.Row align={`center`} key={index_d50eb8dd0a8c6179}>
  <RadixThemesTable.Cell>
  {account_market_state.at(0)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {account_market_state.at(1)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {account_market_state.at(2)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {account_market_state.at(3)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {account_market_state.at(4)}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {`$${account_market_state.at(7)} - $${account_market_state.at(6)}`}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state.user_logged_in) ? (
  <Fragment>
  <RadixThemesPopover.Root>
  <RadixThemesPopover.Trigger>
  <RadixThemesFlex>
  <RadixThemesButton onClick={(...args) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.handle_managing_notification", {account_market_state:account_market_state})], args, {})}>
  {`Manage`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content onCloseAutoFocus={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})} onEscapeKeyDown={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})} onFocusOutside={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})} onInteractOutside={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})} onPointerDownOutside={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state.reset_account_market_state", {event_trigger:_e0})], [_e0], {})}>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  <RadixThemesCallout.Root css={{"icon": "info"}} size={`1`}>
  <RadixThemesCallout.Icon>
  <LucideInfoIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesCallout.Icon>
  <RadixThemesCallout.Text>
  {`Conversion to $Money will begin when ${account_market_state.at(0)} drops below $${account_market_state.at(6)}`}
</RadixThemesCallout.Text>
</RadixThemesCallout.Root>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Notify me when ${account_market_state.at(0)} price is below: `}
</RadixThemesText>
  <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_a2913a891d3d5cb42ac44a924a29d49d}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesTextField.Root name={`threshold_price`} placeholder={`1234.56`} type={`number`}>
  <RadixThemesTextField.Slot css={{"paddingLeft": "0"}}>
  <LucideDollarSignIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesTextField.Slot>
</RadixThemesTextField.Root>
  <RadixThemesButton type={`submit`}>
  {`Confirm`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state.threshold_price_set) ? (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`Current notification price: `}
  <RadixThemesBadge color={`green`}>
  {`$${reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state.current_threshold_price}`}
</RadixThemesBadge>
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
</Fragment>
) : (
  <Fragment>
  <RadixThemesTooltip content={`You need to be logged in to receive notification.`}>
  <RadixThemesButton disabled={true}>
  {`Manage`}
</RadixThemesButton>
</RadixThemesTooltip>
</Fragment>
)}
</Fragment>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
))}
</RadixThemesTable.Body>
  )
}

export function Fragment_aff581b28d861ad998c1e529dfaa867a () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(!reflex___state____state__defimoney_monitor___pages___index____app_state.user_logged_in) ? (
  <Fragment>
  <TelegramLoginButton botName={`defimoney_monitor_bot`} buttonSize={`medium`} cornerRadius={5} dataAuthUrl={`https://llama.rest/auth`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesButton onClick={(...args) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.logout", {})], args, {})} variant={`ghost`}>
  <LucideLogOutIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesButton>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_949044a8fa0509e904aef6402b0799d6 () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state)
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(!reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.account_bound) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} css={{"width": "100%"}} justify={`between`} gap={`3`}>
  <DebounceInput css={{"width": "100%"}} debounceTimeout={700} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____query_state.handle_get_market_states_for_account", {account_address:_e0.target.value})], [_e0], {})} placeholder={`Your wallet address here...`} radius={`large`} size={`3`} value={reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.current_address} variant={`surface`}>
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.account_queried) ? (
  <Fragment>
  <RadixThemesTextField.Slot css={{"paddingLeft": "2"}}>
  <LucideCircleCheckIcon css={{"color": "green"}}/>
</RadixThemesTextField.Slot>
</Fragment>
) : (
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.loading) ? (
  <Fragment>
  <RadixThemesTextField.Slot css={{"paddingLeft": "2"}}>
  <RadixThemesSpinner loading={true}/>
</RadixThemesTextField.Slot>
</Fragment>
) : (
  <Fragment>
  <RadixThemesTextField.Slot css={{"paddingLeft": "2"}}>
  <LucideSearchIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesTextField.Slot>
</Fragment>
)}
</Fragment>
)}
</Fragment>
</DebounceInput>
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.is_input_error) ? (
  <Fragment>
  <RadixThemesText as={`p`} css={{"color": "red"}} size={`1`}>
  {reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.input_validation_text}
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_0417ec365a82716891ae5caba41977b4 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <img css={{"width": "2em"}} src={`/$GM.Logomark.Black.png`}/>
</Fragment>
) : (
  <Fragment>
  <img css={{"width": "2em"}} src={`/$GM.Logomark.Sand.png`}/>
</Fragment>
)}
</Fragment>
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
  <RadixThemesFlex css={{"flexDirection": "column", "width": "auto", "position": "relative"}}>
  <nav css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}, "@media screen and (min-width: 80em)": {"display": "block"}, "@media screen and (min-width: 96em)": {"display": "none"}, "position": "sticky", "backgroundColor": "var(--gray-1)", "top": "0px", "zIndex": "5", "borderBottom": "1px solid var(--gray-5)"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "auto", "paddingTop": "1.25em", "paddingBottom": "1.25em", "@media screen and (min-width: 0)": {"paddingInlineStart": "1em", "paddingInlineEnd": "1em"}, "@media screen and (min-width: 30em)": {"paddingInlineStart": "1em", "paddingInlineEnd": "1em"}, "@media screen and (min-width: 48em)": {"paddingInlineStart": "2em", "paddingInlineEnd": "2em"}}} direction={`row`} gap={`3`} wrap={`wrap`}>
  <RadixThemesFlex align={`center`} gap={{"initial": "3", "sm": "5", "md": "7", "lg": "7"}}>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <img css={{"width": "6em"}} src={`/llama_rest_logo.jpg`}/>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
  <img css={{"width": "2em"}} src={`/llama_rest_logo_small.jpg`}/>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <Fragment_63dcd1e904b67df0929861532875d439/>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
  <Fragment_0417ec365a82716891ae5caba41977b4/>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment_bde5d033a84ff03d98d93916e8424609/>
  <RadixThemesFlex align={`center`} justify={`between`} gap={`4`}>
  <Fragment_aff581b28d861ad998c1e529dfaa867a/>
  <Button_c234b7fa9cc5c0783a54d9767fa13370/>
</RadixThemesFlex>
</RadixThemesFlex>
</nav>
  <Alertdialog__root_75b4ce85183dbcc87ce143ed8bb8f2c0/>
  <RadixThemesFlex css={{"width": "auto", "margin": "1.5em", "flexGrow": "1"}} direction={`column`} gap={`5`}>
  <Fragment_b55f21ee14dc9741041d03ae3bbb7d1f/>
  <RadixThemesCard css={{"spacing": "2", "width": "100%"}} variant={`surface`}>
  <RadixThemesStrong>
  {`Monitor any defi.money positions. Sign in to receive Telegram notifications.`}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  <RadixThemesStrong>
  {`1. `}
</RadixThemesStrong>
  {`Sign in with Telegram.`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  <RadixThemesStrong>
  {`2. `}
</RadixThemesStrong>
  {`Paste in your wallet address.`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  <RadixThemesStrong>
  {`3. `}
</RadixThemesStrong>
  {`Set up notification price points for your positions.`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  <RadixThemesStrong>
  {`4. `}
</RadixThemesStrong>
  {`You will then receive Telegram notifications when collateral price drops below your chosen price points.`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  <RadixThemesStrong>
  {`5. `}
</RadixThemesStrong>
  {`Rest up, llama  🌿`}
</RadixThemesText>
</RadixThemesCard>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`3`}>
  <Fragment_949044a8fa0509e904aef6402b0799d6/>
  <RadixThemesFlex align={`left`} css={{"width": "100%"}} gap={`2`}>
  <Fragment_bc1e24b4c02b802e838772931bb95b5c/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  <RadixThemesHeading color={`violet`} size={`3`}>
  {`Arbitrum`}
</RadixThemesHeading>
  <RadixThemesScrollArea css={{"width": "100%"}} scrollbars={`horizontal`} type={`auto`}>
  <Fragment>
  <RadixThemesTable.Root css={{"width": "100%"}} variant={`surface`}>
  <RadixThemesTable.Header css={{"padding": "5em"}}>
  <RadixThemesTable.Row>
  <RadixThemesTable.ColumnHeaderCell>
  {`COLLATERAL`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`DEBT`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`COLLATERAL AMOUNT`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`$MONEY AMOUNT`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`HEALTH`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`CONVERSION RANGE`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`NOTIFICATION`}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <Table__body_b79e928b66c1bcd97f14742c209d50d1/>
</RadixThemesTable.Root>
</Fragment>
</RadixThemesScrollArea>
</RadixThemesFlex>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  <RadixThemesHeading color={`ruby`} size={`3`}>
  {`Optimism`}
</RadixThemesHeading>
  <RadixThemesScrollArea css={{"width": "100%"}} scrollbars={`horizontal`} type={`auto`}>
  <Fragment>
  <RadixThemesTable.Root css={{"width": "100%"}} variant={`surface`}>
  <RadixThemesTable.Header css={{"padding": "5em"}}>
  <RadixThemesTable.Row>
  <RadixThemesTable.ColumnHeaderCell>
  {`COLLATERAL`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`DEBT`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`COLLATERAL AMOUNT`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`$MONEY AMOUNT`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`HEALTH`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`CONVERSION RANGE`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`NOTIFICATION`}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <Table__body_b0bd2d46e34b9368a32f75f42a495b5e/>
</RadixThemesTable.Root>
</Fragment>
</RadixThemesScrollArea>
</RadixThemesFlex>
  <RadixThemesFlex align={`end`} className={`rx-Stack`} css={{"bottom": "0px", "width": "100%", "zIndex": "1", "paddingTop": "1em", "paddingBottom": "1em", "borderTop": "1px solid var(--gray-5)", "marginTop": "3em"}} direction={`row`} justify={`center`} gap={`3`}>
  <RadixThemesText as={`p`} color={`gray`} size={`1`}>
  {`@pastelfork`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`llama.rest`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}

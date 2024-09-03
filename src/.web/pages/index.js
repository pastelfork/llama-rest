/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { CircleCheckIcon as LucideCircleCheckIcon, DollarSignIcon as LucideDollarSignIcon, InfoIcon as LucideInfoIcon, LogOutIcon as LucideLogOutIcon, SearchIcon as LucideSearchIcon, SunMoonIcon as LucideSunMoonIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Badge as RadixThemesBadge, Button as RadixThemesButton, Callout as RadixThemesCallout, Card as RadixThemesCard, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Popover as RadixThemesPopover, Spinner as RadixThemesSpinner, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, TextField as RadixThemesTextField, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import TelegramLoginButton from "telegram-login-button"
import { DebounceInput } from "react-debounce-input"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Fragment_32f80e2abe1e314106ebdf82e670c03b () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state)
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(!reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.account_bound) ? (
  <Fragment>
  <RadixThemesFlex align={`center`} css={{"width": "100%"}} justify={`between`} gap={`2`}>
  <DebounceInput css={{"width": "100%"}} debounceTimeout={600} element={RadixThemesTextField.Root} onChange={(_e0) => addEvents([Event("reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____query_state.handle_get_market_states_for_account", {account_address:_e0.target.value})], [_e0], {})} placeholder={`Your wallet address here...`} radius={`large`} size={`3`} value={reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.current_address} variant={`surface`}>
  <RadixThemesTextField.Slot css={{"paddingLeft": "2"}}>
  <LucideSearchIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesTextField.Slot>
</DebounceInput>
  <RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"color": "red"}}>
  {reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.input_validation_text}
</RadixThemesText>
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.loading) ? (
  <Fragment>
  <RadixThemesSpinner loading={true}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.account_queried) ? (
  <Fragment>
  <LucideCircleCheckIcon css={{"color": "green"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
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

export function Fragment_6cf6d468a7b4120f942dde91a354c26b () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(!reflex___state____state__defimoney_monitor___pages___index____app_state.user_logged_in) ? (
  <Fragment>
  <TelegramLoginButton botName={`defimoney_monitor_bot`} buttonSize={`medium`} cornerRadius={5} dataAuthUrl={`https://defimoney-monitor.reflex.run/auth`}/>
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

export function Table__body_e08b4f47e42456448d0b690765b859cb () {
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
  {reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.arbitrum_account_states.map((account_market_state, index_0a8cbd67e54ceaaf) => (
  <RadixThemesTable.Row align={`center`} key={index_0a8cbd67e54ceaaf}>
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

export function Fragment_8cfb37e02b3d41a375f31722421e3ec4 () {
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state)
  const reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state)
  const reflex___state____state__defimoney_monitor___pages___index____app_state = useContext(StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.account_bound) ? (
  <Fragment>
  <RadixThemesFlex gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Your address: `}
</RadixThemesText>
  <RadixThemesBadge size={`2`} variant={`solid`}>
  {reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.bound_address}
</RadixThemesBadge>
</RadixThemesFlex>
</Fragment>
) : (
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

export function Table__body_16a825b7dcb92c54ca69b2a467955db7 () {
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
  {reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.optimism_account_states.map((account_market_state, index_0a8cbd67e54ceaaf) => (
  <RadixThemesTable.Row align={`center`} key={index_0a8cbd67e54ceaaf}>
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
  <RadixThemesFlex css={{"flexDirection": "column", "width": "100%", "margin": "auto", "position": "relative"}}>
  <nav css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}, "@media screen and (min-width: 80em)": {"display": "block"}, "@media screen and (min-width: 96em)": {"display": "none"}, "position": "sticky", "backgroundColor": "var(--gray-1)", "top": "0px", "zIndex": "5", "borderBottom": "1px solid var(--gray-5)"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%", "paddingTop": "1.25em", "paddingBottom": "1.25em", "@media screen and (min-width: 0)": {"paddingInlineStart": "1em", "paddingInlineEnd": "1em"}, "@media screen and (min-width: 30em)": {"paddingInlineStart": "1em", "paddingInlineEnd": "1em"}, "@media screen and (min-width: 48em)": {"paddingInlineStart": "2em", "paddingInlineEnd": "2em"}}} direction={`row`} gap={`3`}>
  <RadixThemesHeading color={`bronze`} css={{"fontSize": "1em"}}>
  {`Defi.Money Monitor`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`center`} justify={`between`} gap={`4`}>
  <Fragment_6cf6d468a7b4120f942dde91a354c26b/>
  <Button_c234b7fa9cc5c0783a54d9767fa13370/>
</RadixThemesFlex>
</RadixThemesFlex>
</nav>
  <RadixThemesFlex css={{"maxWidth": "100%", "margin": "auto"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`8`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Fragment_b55f21ee14dc9741041d03ae3bbb7d1f/>
  <RadixThemesCard css={{"spacing": "2", "width": "100%"}} variant={`surface`}>
  <RadixThemesStrong>
  {`Monitor any defi.money positions. Sign in to receive Telegram notifications.`}
</RadixThemesStrong>
  <RadixThemesText as={`p`}>
  {`1. Sign in with Telegram.`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`2. Paste in your wallet address.`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`3. Set up notification price points for your positions.`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`4. You will then receive Telegram notifications when collateral price drops below your chosen price points.`}
</RadixThemesText>
</RadixThemesCard>
  <RadixThemesFlex align={`left`} css={{"width": "100%"}} gap={`2`}>
  <Fragment_8cfb37e02b3d41a375f31722421e3ec4/>
</RadixThemesFlex>
  <Fragment_32f80e2abe1e314106ebdf82e670c03b/>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  <RadixThemesHeading color={`violet`} size={`3`}>
  {`Arbitrum`}
</RadixThemesHeading>
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
  <Table__body_e08b4f47e42456448d0b690765b859cb/>
</RadixThemesTable.Root>
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  <RadixThemesHeading color={`ruby`} size={`3`}>
  {`Optimism`}
</RadixThemesHeading>
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
  <Table__body_16a825b7dcb92c54ca69b2a467955db7/>
</RadixThemesTable.Root>
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Overview`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}

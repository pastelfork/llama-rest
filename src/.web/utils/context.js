import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.defimoney_monitor___views___color_picker____color_picker_state": {"primary_color_options": {"Tomato": "linear-gradient(45deg, var(--tomato-10), var(--tomato-8))", "Red": "linear-gradient(45deg, var(--red-10), var(--red-8))", "Ruby": "linear-gradient(45deg, var(--ruby-10), var(--ruby-8))", "Crimson": "linear-gradient(45deg, var(--crimson-10), var(--crimson-8))", "Pink": "linear-gradient(45deg, var(--pink-10), var(--pink-8))", "Plum": "linear-gradient(45deg, var(--plum-10), var(--plum-8))", "Purple": "linear-gradient(45deg, var(--purple-10), var(--purple-8))", "Violet": "linear-gradient(45deg, var(--violet-10), var(--violet-8))", "Iris": "linear-gradient(45deg, var(--iris-10), var(--iris-8))", "Indigo": "linear-gradient(45deg, var(--indigo-10), var(--indigo-8))", "Blue": "linear-gradient(45deg, var(--blue-10), var(--blue-8))", "Cyan": "linear-gradient(45deg, var(--cyan-10), var(--cyan-8))", "Teal": "linear-gradient(45deg, var(--teal-10), var(--teal-8))", "Jade": "linear-gradient(45deg, var(--jade-10), var(--jade-8))", "Green": "linear-gradient(45deg, var(--green-10), var(--green-8))", "Grass": "linear-gradient(45deg, var(--grass-10), var(--grass-8))", "Brown": "linear-gradient(45deg, var(--brown-10), var(--brown-8))", "Orange": "linear-gradient(45deg, var(--orange-10), var(--orange-8))", "Sky": "linear-gradient(45deg, var(--sky-10), var(--sky-8))", "Mint": "linear-gradient(45deg, var(--mint-10), var(--mint-8))", "Lime": "linear-gradient(45deg, var(--lime-10), var(--lime-8))", "Yellow": "linear-gradient(45deg, var(--yellow-10), var(--yellow-8))", "Amber": "linear-gradient(45deg, var(--amber-10), var(--amber-8))", "Gold": "linear-gradient(45deg, var(--gold-10), var(--gold-8))", "Bronze": "linear-gradient(45deg, var(--bronze-10), var(--bronze-8))", "Gray": "linear-gradient(45deg, var(--gray-10), var(--gray-8))"}, "secondary_color_options": {"Gray": "linear-gradient(45deg, var(--gray-10), var(--gray-8))", "Mauve": "linear-gradient(45deg, var(--mauve-10), var(--mauve-8))", "Slate": "linear-gradient(45deg, var(--slate-10), var(--slate-8))", "Sage": "linear-gradient(45deg, var(--sage-10), var(--sage-8))", "Olive": "linear-gradient(45deg, var(--olive-10), var(--olive-8))", "Sand": "linear-gradient(45deg, var(--sand-10), var(--sand-8))"}}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.defimoney_monitor___backend___table_state____table_state": {"filtered_sorted_items": [], "get_current_page": [], "items": [], "limit": 12, "offset": 0, "page_number": 1, "search_value": "", "sort_reverse": false, "sort_value": "", "total_items": 0, "total_pages": 0}, "reflex___state____state.defimoney_monitor___pages___index____app_state": {"current_user_first_name": "", "current_user_tg_id": 0, "current_user_username": "", "get_current_user_tg_id": 0, "user_logged_in": false}, "reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____query_state": {"account_queried": false, "arbitrum_account_states": [], "current_address": "", "get_current_address": "", "input_validation_text": "", "is_input_error": false, "loading": false, "optimism_account_states": []}, "reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state": {"account_market_state": [], "current_threshold_price": 0, "threshold_price_set": false}, "reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___auth____auth_state": {"first_name": "", "tg_id": 0, "username": ""}, "reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____account_state": {"account_bound": false, "bound_address": ""}, "reflex___state____state.defimoney_monitor___pages___index____alert_state": {"alert_open": false}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.defimoney_monitor___templates___template____theme_state": {"accent_color": "crimson", "gray_color": "gray", "radius": "large", "scaling": "100%"}, "reflex___state____state.defimoney_monitor___pages___profile____profile_state": {"profile": {"name": "Admin", "email": "", "notifications": true}}}

export const defaultColorMode = "light"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__defimoney_monitor___backend___table_state____table_state: createContext(null),
  reflex___state____state__defimoney_monitor___pages___index____app_state: createContext(null),
  reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state: createContext(null),
  reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state: createContext(null),
  reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___auth____auth_state: createContext(null),
  reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state: createContext(null),
  reflex___state____state__defimoney_monitor___pages___index____alert_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__defimoney_monitor___templates___template____theme_state: createContext(null),
  reflex___state____state__defimoney_monitor___pages___profile____profile_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// Theses events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2024-09-05 19:52:22.444511"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state, dispatch_reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___views___color_picker____color_picker_state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__defimoney_monitor___backend___table_state____table_state, dispatch_reflex___state____state__defimoney_monitor___backend___table_state____table_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___backend___table_state____table_state"])
  const [reflex___state____state__defimoney_monitor___pages___index____app_state, dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___pages___index____app_state"])
  const [reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state, dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____query_state"])
  const [reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state, dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state"])
  const [reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___auth____auth_state, dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___auth____auth_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___auth____auth_state"])
  const [reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state, dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____account_state"])
  const [reflex___state____state__defimoney_monitor___pages___index____alert_state, dispatch_reflex___state____state__defimoney_monitor___pages___index____alert_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___pages___index____alert_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__defimoney_monitor___templates___template____theme_state, dispatch_reflex___state____state__defimoney_monitor___templates___template____theme_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___templates___template____theme_state"])
  const [reflex___state____state__defimoney_monitor___pages___profile____profile_state, dispatch_reflex___state____state__defimoney_monitor___pages___profile____profile_state] = useReducer(applyDelta, initialState["reflex___state____state.defimoney_monitor___pages___profile____profile_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.defimoney_monitor___views___color_picker____color_picker_state": dispatch_reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.defimoney_monitor___backend___table_state____table_state": dispatch_reflex___state____state__defimoney_monitor___backend___table_state____table_state,
      "reflex___state____state.defimoney_monitor___pages___index____app_state": dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state,
      "reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____query_state": dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state,
      "reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____notification_state": dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state,
      "reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___auth____auth_state": dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___auth____auth_state,
      "reflex___state____state.defimoney_monitor___pages___index____app_state.defimoney_monitor___pages___index____account_state": dispatch_reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state,
      "reflex___state____state.defimoney_monitor___pages___index____alert_state": dispatch_reflex___state____state__defimoney_monitor___pages___index____alert_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.defimoney_monitor___templates___template____theme_state": dispatch_reflex___state____state__defimoney_monitor___templates___template____theme_state,
      "reflex___state____state.defimoney_monitor___pages___profile____profile_state": dispatch_reflex___state____state__defimoney_monitor___pages___profile____profile_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state.Provider value={ reflex___state____state }>
    <StateContexts.reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state.Provider value={ reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state.Provider value={ reflex___state____state__defimoney_monitor___backend___table_state____table_state }>
    <StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state.Provider value={ reflex___state____state__defimoney_monitor___pages___index____app_state }>
    <StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.Provider value={ reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state }>
    <StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state.Provider value={ reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state }>
    <StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___auth____auth_state.Provider value={ reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___auth____auth_state }>
    <StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.Provider value={ reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state }>
    <StateContexts.reflex___state____state__defimoney_monitor___pages___index____alert_state.Provider value={ reflex___state____state__defimoney_monitor___pages___index____alert_state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider value={ reflex___state____state__reflex___state____update_vars_internal_state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
    <StateContexts.reflex___state____state__defimoney_monitor___templates___template____theme_state.Provider value={ reflex___state____state__defimoney_monitor___templates___template____theme_state }>
    <StateContexts.reflex___state____state__defimoney_monitor___pages___profile____profile_state.Provider value={ reflex___state____state__defimoney_monitor___pages___profile____profile_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___pages___profile____profile_state.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___templates___template____theme_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___pages___index____alert_state.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____account_state.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___auth____auth_state.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____notification_state.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state__defimoney_monitor___pages___index____query_state.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___pages___index____app_state.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___backend___table_state____table_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider>
    </StateContexts.reflex___state____state__defimoney_monitor___views___color_picker____color_picker_state.Provider>
    </StateContexts.reflex___state____state.Provider>
  )
}
Component Instance     Vs.     Snapshot

- a snapshot is a piece of information (props, states, React elements, etc.) that describes
  everything between re-renders.

Core React Loop

Mount -> trigger -> render -> reconciliation -> commit
     / \                                              |
      |                                              \ /
      ————————————————————————————————————————————————

Mount: 
Trigger: when a state variable is changed, it triggers a re-render.
Render: React will call the function component, get React elements.
Reconciliation:
Commit:

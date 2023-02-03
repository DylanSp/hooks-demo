# hooks-demo

Demonstration of some features of React's `useState()` hook, based on a conversation in SDG Slack.

Each file in [src/guestLists](/src/guestLists) has a different implementation of the core logic:
* `v1a` and `v1b` are based on Chayce's code; despite calling `setName()` and `setGuests()` in a different order inside `onClick()`, they have the same functionality, due to how React batches state updates.
* `v2` shows a slight refactoring to avoid `onClick()` closing over the `name` variable.
* `v3` and `v4` show how the callback form of `setGuests()` can be used to avoid race conditions (using `setTimeout()` to artificially introduce a delay)
  * `v3` demonstrates the race condition; open the browser console, then rapidly click the Add Guest button. The console will log many additions to `guests`, but most of them won't be displayed; the updates to `guests` will be "lost".
  * `v4` shows how this can be fixed by using the callback form, `setGuests((prevGuests) => [...prevGuests, newName])`; every added guest should be displayed, matching what's logged in the console.

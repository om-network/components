This repository contains a collection of UI components for users of the OMN Builder. This project is highly experimental at this time.

### Hard Rules
- A component shall be a React component.
- A component shall use CSS classes supported by the Tailwind CSS Project (https://github.com/tailwindlabs/tailwindcss)
- A component shall only send / receive data from the uri `/graphql`
- A component shall be a `Header`, `Section`, or `Footer` type
- A component shall consist of two subcomponents; a "read" and a "write" component.
- A component shall only export the component presenter.
- A component shall be MIT License.

### Soft Rules
- A component should use Apolloclient Hooks {useQuery, useMutation} (https://github.com/apollographql/apollo-client)
- A component should use ui-kit components available here (https://github.com/om-network/ui-kit)
- A component should use headlessui react components available here (https://github.com/tailwindlabs/headlessui)
- A component should have unit tests via Jest (https://github.com/facebook/jest)
- A component should have a storybook (https://storybook.js.org/).

### How to contribute a component?
- Create a thing on OM.Network
- Convert the thing to a component type. Once converted, you will be given a component `token e.g oXt7-testing`
- Click copy next to the field token to copy the `{token}` to your clipboard
- Clone this repository (om.network/components)
- Create a new folder name `{token}`
- Once completed, submit a pull request to this repository with useful description

### How to get started developing a component?
- Copy the `example` folder
- Rename the folder to `{token}`
- Start storybook yarn storybook.
- Develop

### When can users use your components in their pages?
Maintainers (@thachp @lnguyenfx) review your pull request. If approved and merged, it will be included to the changelog.md under a new version. A user then compares the version number with the builder version display in the footer of `https://{yourdomainname}/builder`

### How is a component approved?
- Maintainers look for common case scenarios.  Is the component really necessary?
- Maintainers look for nots (shall nots, should nots).  Codes that break our hard or soft rules.
- Maintainers look for collective consistency in codes; stylings, performance flaws, design flaws, etc...
- Maintainers look to confirm that the component work

### Other ways you can contribute
- Review pull requests.  Give thumb up :thumbsup: to the pull requests.
- Fix bugs associated with a component
- Report bugs associated with our site (om.network)
- Make donations to our efforts (https://opencollective.com/om-network).


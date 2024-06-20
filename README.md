![Screenshot 2024-06-20 160043](https://github.com/Karthiraj7/Gallery/assets/108760004/c613e37a-cf7c-406e-bc1c-918c5798a3fd)![Screenshot 2024-06-20 160032](https://github.com/Karthiraj7/Gallery/assets/108760004/5555e94a-a066-429b-81d6-0ec1e63f6780)# gallery

## Summary

Summary: SPFx React Gallery with Breadcrumbs, Lightbox, and SharePoint List Integration
Project Components
Gallery Component: Displays images and videos.
Breadcrumbs Component: Allows navigation through folders.
Lightbox Component: Shows images and videos in a modal view.
Key Features!
Breadcrumbs: Navigate through different folders within the gallery.
Lightbox: Display images and videos in an overlay modal.
Relative URLs: Use relative URLs to fetch and display content.
SharePoint List Integration: Fetch images and videos from a SharePoint list called "Image and Video".
Implementation Steps
Set Up SPFx Project: Create an SPFx project using the Yeoman generator with React.
Create SharePoint List: Set up a list named "Image and Video" with columns like Title, FileUrl, and FileType.
Fetch Data: Use PnP.js to fetch items from the SharePoint list.
Implement Breadcrumbs: Maintain navigation state and update it based on user interactions.
Implement Lightbox: Create a modal component to display the selected image or video.
Render Gallery: Display fetched items in the gallery with breadcrumb navigation and lightbox functionality.


![Screenshot 2024-06-20 153403](https://github.com/Karthiraj7/Gallery/assets/108760004/08b15866-33c6-4997-b368-1afd80568f18)
![Screenshot 2024-06-20 160043](https://github.com/Karthiraj7/Gallery/assets/108760004/d2eaa387-96c7-48c3-a066-cc6cb777f32e)

![Screenshot 2024-06-20 160017](https://github.com/Karthiraj7/Gallery/assets/108760004/4abcff79-5889-4105-813b-652519cab602)
![Screenshot 2024-06-20 160032](https://github.com/Karthiraj7/Gallery/assets/108760004/f13c5d7b-9b86-4df7-9f1e-824116ee5e4c)


![Screenshot 2024-06-20 153433](https://github.com/Karthiraj7/Gallery/assets/108760004/a26253ad-d474-44d9-9ffc-e631758964de)






## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.18.2-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Any special pre-requisites?

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development

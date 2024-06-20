import * as React from 'react';
import type { IGalleryProps } from './IGalleryProps';

import { SPComponentLoader } from '@microsoft/sp-loader';
import Body from './Body';


export default class Gallery extends React.Component<IGalleryProps, {}> {
  async componentDidMount() {
    try {
      await SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
      await SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
      await SPComponentLoader.loadCss("https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/SiteAssets/css/style.css");
      await SPComponentLoader.loadCss("https://3c3tsp.sharepoint.com/sites/demosite/siteone/training11/GallerySite/SiteAssets/css/responsive.css");
      await SPComponentLoader.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
      await SPComponentLoader.loadScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js");
    } catch (error) {
      console.error("Error loading scripts or styles", error);
    }
  }
 
  public render(): React.ReactElement<IGalleryProps> {
    return (
      <div>

 <Body/>
    
      </div>
    );
  }
}
 
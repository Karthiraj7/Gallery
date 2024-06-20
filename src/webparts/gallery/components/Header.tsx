// import * as React from 'react';
// import { Web } from "@pnp/sp/webs";

// interface HeaderState {
//     items: any[],
//     clickedItem: string | null,
//     BodyList: any[] // Define BodyList in HeaderState
// }

// class Header extends React.Component<{}, HeaderState> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             items: [],
//             clickedItem: null,
//             BodyList: [] // Initialize BodyList in the state
//         };
//         this.handleItemClick = this.handleItemClick.bind(this);
//     }

//     componentDidMount() {
//         this.getItemsFromList();
//         // this.whatsapp();
       
//     }

    
//     // public whatsapp() {
//     //    var settings = {
//     //      "url": "https://graph.facebook.com/v19.0/324175050777632/messages",
//     //      "method": "POST",
//     //      "timeout": 0,
//     //      "headers": {
//     //        "Authorization": "Bearer EAAFPZCRxCPSUBOZBw0xokzFeLJ9r7EgwjLafZA7QZBqsSAoJa3ZBasQL2qxoJjUwSxaFNpInlyrqcClOrp2uDRV5Aq3vL5ZCdksidqGuzd1makBrjliOKHo7IasZBBlG0OMxcPWiFNAAGSB53HJzZCg29riwte41vmfKrBIoxk4g5mbhRpwuOxTyQf4Pp9QyOlKZB",
//     //        "Content-Type": "application/json"
//     //      },
//     //      "data": JSON.stringify({
//     //        "messaging_product": "whatsapp",
//     //        "to": "918111003993",
//     //        'text': {'body': 'Hello'}
//     //        // "type": "template",
//     //        // "template": {
//     //        //   "name": "hello_world",
//     //        //   "language": {
//     //        //     "code": "en_US"
//     //        //   }
//     //        // }
//     //      }),
//     //    };
    
//     //    $.ajax(settings).done(function (response) {
//     //      console.log(response);
//     //    });
//     //  }

//     // public getWhatsappMessages() {
//     //     try {
//     //         const accessToken = "EAAFPZCRxCPSUBOZBw0xokzFeLJ9r7EgwjLafZA7QZBqsSAoJa3ZBasQL2qxoJjUwSxaFNpInlyrqcClOrp2uDRV5Aq3vL5ZCdksidqGuzd1makBrjliOKHo7IasZBBlG0OMxcPWiFNAAGSB53HJzZCg29riwte41vmfKrBIoxk4g5mbhRpwuOxTyQf4Pp9QyOlKZB";
//     //         const phoneNumberId = "918111003993";  // Use your actual phone number ID here
//     //         const endpoint = `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`;
//     //         const url = `${endpoint}?access_token=${accessToken}`;
    
//     //         const settings = {
//     //             url: url,
//     //             method: 'GET',
//     //             timeout: 0,
//     //             headers: {
//     //                 "Content-Type": "application/json"
//     //             }
//     //         };
    
//     //         $.ajax(settings).done(function (response) {
//     //             // Log the full response for debugging purposes
//     //             console.log("Response:", response);
    
//     //             // Extract and log message text from the response
//     //             if (response && response.data) {
//     //                 response.data.forEach((message: any) => {
//     //                     if (message.text) {
//     //                         console.log("Text Message:", message.text.body);
//     //                     } else if (message.type === 'encrypted') {
//     //                         console.log("Encrypted Message:", message);
//     //                     } else {
//     //                         console.log("Message without text body found:", message);
//     //                     }
//     //                 });
//     //             } else {
//     //                 console.log("No data found in response");
//     //             }
//     //         }).fail(function (jqXHR, textStatus, errorThrown) {
//     //             console.error("Request failed:", textStatus, errorThrown);
//     //         });
//     //     } catch (error) {
//     //         console.error("Request failed:", error.message);
//     //     }
//     // }
    
//     // public getWhatsappMessages() {
//     //     try {
//     //         const accessToken = "EAAFPZCRxCPSUBOZBw0xokzFeLJ9r7EgwjLafZA7QZBqsSAoJa3ZBasQL2qxoJjUwSxaFNpInlyrqcClOrp2uDRV5Aq3vL5ZCdksidqGuzd1makBrjliOKHo7IasZBBlG0OMxcPWiFNAAGSB53HJzZCg29riwte41vmfKrBIoxk4g5mbhRpwuOxTyQf4Pp9QyOlKZB";
//     //         const phoneNumberId = "918111003993";  // Replace with your actual phone number ID
//     //         const endpoint = `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`;
//     //         const url = `${endpoint}?access_token=${accessToken}`;
    
//     //         const settings = {
//     //             url: url,
//     //             method: 'GET',
//     //             timeout: 0,
//     //             headers: {
//     //                 "Content-Type": "application/json"
//     //             }
//     //         };
    
//     //         $.ajax(settings).done(function (response) {
//     //             // Log the full response for debugging purposes
//     //             console.log("Response:", response);
    
//     //             // Extract and log message text from the response
//     //             if (response && response.data) {
//     //                 response.data.forEach((message: any) => {
//     //                     if (message.text) {
//     //                         console.log("Text Message:", message.text.body);
//     //                     } else if (message.type === 'encrypted') {
//     //                         console.log("Encrypted Message:", message);
//     //                     } else {
//     //                         console.log("Message without text body found:", message);
//     //                     }
//     //                 });
//     //             } else {
//     //                 console.log("No data found in response");
//     //             }
//     //         }).fail(function (jqXHR, textStatus, errorThrown) {
//     //             console.error("Request failed:", textStatus, errorThrown);
//     //             console.error("Response Text:", jqXHR.responseText); // Log response text for more details
//     //         });
//     //     } catch (error) {
//     //         console.error("Request failed:", error.message);
//     //     }
//     // }
    
    
//     async getItemsFromList() {
//         try {
//             const items = await Web("https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment").lists.getByTitle("GalleryHead").items.getAll();
//             items.sort((a: { Order: number }, b: { Order: number }) => a.Order - b.Order);
//             this.setState({ items });
//         } catch (error) {
//             console.error('Error fetching items:', error);
//         }
//     }

//     async handleItemClick(Title: string) {
//         try {
//             const WEB = Web("https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment");
    
//             // Fetch only the items where the 'Under' lookup column's title matches the specified 'Title'
//             const BodyList = await WEB.lists.getByTitle("GalleryBody").items
//                 .filter(`Under/Title eq '${Title}'`)
//                 .select("Id", "Title", "Under/Title") // Include the 'Title' field of the current list
//                 .expand("Under") // Include the 'Under' lookup column
//                 .getAll();
    
//             if (BodyList.length > 0) {
//                 // Update state to show clicked item and related items
//                 this.setState({ clickedItem: Title, BodyList }); // Set BodyList in the state
//             } else {
//                 console.error('No item found with the specified Title in the "Under" column:', Title);
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }
    

//     render() {
//         const { items, clickedItem, BodyList } = this.state; // Destructure BodyList from state
//         return (
//             <div>
//                 <div className="bg-fixed-img">
//                     <img src="https://3c3tsp.sharepoint.com/sites/demosite/sitetwo/training14/SiteAssets/images/bg-img.png" alt="image" />
//                 </div>
//                 <div style={{ backgroundColor: '#02354D', padding: '7px 0px' }} className="container">
//                     <div className="header-left">
//                         <div className="logo">
//                             <a href=""><img src="https://3c3tsp.sharepoint.com/sites/demosite/sitetwo/training14/SiteAssets/images/logo_white.svg" alt="image" /></a>
//                         </div>
//                         <div className="search relative">
//                             <img src="https://3c3tsp.sharepoint.com/sites/demosite/sitetwo/training14/SiteAssets/images/search.png" alt="image" />
//                             <input type="text" className="form-control insearch" placeholder="Search Here" />
//                         </div>
//                     </div>
//                     <div className="header-right">
//                         <div className="header-right-lists">
//                             <ul>
//                                 <li><a href="" className="notification relative">
//                                     <img src="https://3c3tsp.sharepoint.com/sites/demosite/sitetwo/training14/SiteAssets/images/tq1.svg" alt="images" />
//                                     <span> 4 </span>
//                                 </a>
//                                 </li>
//                                 <li><a href="" className="notification relative">
//                                     <img src="https://3c3tsp.sharepoint.com/sites/demosite/sitetwo/training14/SiteAssets/images/tq2.svg" alt="images" />
//                                 </a>
//                                 </li>
//                                 <li><a href="" className="notification relative">
//                                     <img src="https://3c3tsp.sharepoint.com/sites/demosite/sitetwo/training14/SiteAssets/images/tq3.svg" alt="images" />
//                                 </a>
//                                 </li>
//                                 <li><a href="" className="notification relative">
//                                     <img src="https://3c3tsp.sharepoint.com/sites/demosite/sitetwo/training14/SiteAssets/images/tq4.svg" alt="images" />
//                                     <span> 4 </span>
//                                 </a>
//                                 </li>
//                                 <li className="user-images"><a href="" className="notification relative">
//                                     <img src="https://3c3tsp.sharepoint.com/sites/demosite/sitetwo/training14/SiteAssets/images/user_svg.svg" alt="images" />
//                                 </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
    
//                 <div className="inner-pages-nav">
//                     <div className="container">
//                         <nav>
//                             <ul>
//                                 {items.map((item: any) => (
//                                     <li key={item.Id}>
//                                         <a href="#" onClick={() => this.handleItemClick(item.Title)}>{item.Title}</a>
                                      
//                                         {clickedItem === item.Title && (
//                                             <div className="third-level-submenu relative">
//                                                 <ul>
//                                                     {BodyList.map((item: any, index: number) => (
//                                                         <React.Fragment key={item.Id}>
//                                                             <li>{item.Title}</li>
//                                                             {index !== BodyList.length - 1 && <br />}
//                                                         </React.Fragment>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         )}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export default Header

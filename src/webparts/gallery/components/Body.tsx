import * as React from 'react';
import { Web } from "@pnp/sp/webs";
import '@pnp/sp/presets/all';

interface GalleryFile {
    ServerRelativeUrl: string;
    Name: string;
}

interface GalleryFolderData {
    name: string;
    image: string[];
    videos: string[];
    subfolders?: GalleryFolderData[];
}

class GalleryPage extends React.Component<{}, {
    galleryFoldersData: GalleryFolderData[];
    selectedFolder: GalleryFolderData | null;
    selectedTab: 'Images' | 'Videos';
    folderPath: GalleryFolderData[];
    selectedImageIndex: number | null;
    selectedVideo: string | null;
    lightboxOpen: boolean;
    showGridView: boolean;
}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            galleryFoldersData: [],
            selectedFolder: null,
            selectedTab: 'Images',
            folderPath: [],
            selectedImageIndex: null,
            selectedVideo: null,
            lightboxOpen: false,
            showGridView: false,
        };
    }

    componentDidMount() {
        this.fetchGalleryData();
    }

    fetchGalleryData = async () => {
        try {
            const galleryWeb = Web("https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment");
            const foldersData = await galleryWeb.lists.getByTitle("gallery").rootFolder.folders.get();

            // Filter out the "Forms" folder
            const filteredFoldersData = foldersData.filter(folder => folder.Name !== "Forms");

            const folderData = await Promise.all(filteredFoldersData.map(async (folder) => {
                const folderFiles = await galleryWeb.getFolderByServerRelativeUrl(folder.ServerRelativeUrl).files.get();
                console.log("Folder Name:", folder.Name);
                const imageUrls = folderFiles.filter(file => this.isImageFile(file.Name)).map(file => file.ServerRelativeUrl);
                const videoUrls = folderFiles.filter(file => this.isVideoFile(file.Name)).map(file => file.ServerRelativeUrl);

               
                const subfoldersData = await galleryWeb.getFolderByServerRelativeUrl(folder.ServerRelativeUrl).folders.get();
                const subfolders = await Promise.all(subfoldersData.map(async (subfolder) => {
                    return await this.fetchSubfolderData(galleryWeb, subfolder);
                }));

                return { name: folder.Name, image: imageUrls, videos: videoUrls, subfolders: subfolders };
            }));

            this.setState({ galleryFoldersData: folderData });
        } catch (error) {
            console.error("Error retrieving folders:", error);
        }
    };

    fetchSubfolderData = async (galleryWeb: any, folder: any): Promise<GalleryFolderData> => {
        const subfolderFiles = await galleryWeb.getFolderByServerRelativeUrl(folder.ServerRelativeUrl).files.get();
        const subfolderImageUrls = subfolderFiles.filter((file: GalleryFile) => this.isImageFile(file.Name)).map((file: GalleryFile) => file.ServerRelativeUrl);
        const subfolderVideoUrls = subfolderFiles.filter((file: GalleryFile) => this.isVideoFile(file.Name)).map((file: GalleryFile) => file.ServerRelativeUrl);

        // Fetch sub-subfolders
        const subfoldersData = await galleryWeb.getFolderByServerRelativeUrl(folder.ServerRelativeUrl).folders.get();
        const subfolders = await Promise.all(subfoldersData.map(async (subsubfolder: any) => {
            return await this.fetchSubfolderData(galleryWeb, subsubfolder);
        }));

        return { name: folder.Name, image: subfolderImageUrls, videos: subfolderVideoUrls, subfolders: subfolders };

    
    };

    handleGalleryFolderClick = (folder: GalleryFolderData) => {
        this.setState(prevState => ({
            selectedFolder: folder,
            folderPath: [...prevState.folderPath, folder],
        }));
    };

    handleTabChange = (tab: 'Images' | 'Videos') => {
        this.setState({ selectedTab: tab });
    };

    isImageFile = (fileName: string): boolean => {
        return /\.(jpg|jpeg|png)$/i.test(fileName);
    };

    isVideoFile = (fileName: string): boolean => {
        return /\.mp4$/i.test(fileName);
    };

    handleImageClick = (index: number) => {
        // Set the clicked image index to state
        this.setState({ selectedImageIndex: index, selectedVideo: null, lightboxOpen: true });
    };

    handleVideoClick = (videoUrl: string) => {
        // Set the clicked video URL to state
        this.setState({ selectedVideo: videoUrl, selectedImageIndex: null, lightboxOpen: true });
    };

    handleLightboxClose = () => {
        this.setState({
            selectedImageIndex: null,
            selectedVideo: null,
            lightboxOpen: false,
        });
    };

    lightboxvideoclick = () => {
        this.setState(prevState => ({
            showGridView: !prevState.showGridView,
        }));
    };

    handleBreadcrumbClick = (index: number) => {
        const { folderPath } = this.state;
    
        // Navigate to the selected folder based on the index
        this.setState({ selectedFolder: folderPath[index], folderPath: folderPath.slice(0, index + 1) });
    };
    
    render() {
        const { selectedFolder, showGridView, selectedTab, galleryFoldersData, folderPath, selectedImageIndex, selectedVideo, lightboxOpen } = this.state;

        return (
            <div>
                <div className="section-right">
                    <div className="inner-banner-header relative m-b-20">
                        <div className="inner-banner-overlay"></div>
                        <div className="inner-banner-contents">
                            <h1>Home Banner</h1>
                            <ul className="breadcums">
                            <li><a href="">Home</a></li>
                            {folderPath.map((folder, index) => (
                                <li key={index}><a href="#" onClick={() => this.handleBreadcrumbClick(index)}>{folder.name}</a></li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    {selectedFolder ? (
                        <div className="inner-page-contents gallery-viewall-imgs">
                            <div className="top-news-sections category-news-sec m-b-20">
                                <div className="sec">
                                    <div className="row">
                                        <div className="col-md-12 category-main-lists">
                                            <div className="img-galler-section-cls">
                                                <ul>
                                                    <li className={selectedTab === 'Images' ? 'active' : ''} onClick={() => this.handleTabChange('Images')}>
                                                        <a href="#"> Images </a>
                                                    </li>
                                                    <li className={selectedTab === 'Videos' ? 'active' : ''} onClick={() => this.handleTabChange('Videos')}>
                                                        <a href="#"> Videos </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="section-part clearfix">
                                                <ul className="clearfix" style={{ display: 'flex', gap: '40px' }}>
                                                    {/* Render images */}
                                                    {selectedTab === 'Images' && selectedFolder.image.length > 0 ? (
                                                        selectedFolder.image.map((image: string, index: number) => (
                                                            <li key={index} onClick={() => this.handleImageClick(index)}>
                                                                <img src={image} alt="image" style={{ width: '100%', height: 'auto', borderRadius: '15px', cursor: 'pointer' }} />
                                                            </li>
                                                        ))
                                                    ) : selectedTab === 'Images' ? (
                                                        <li>No images</li>
                                                    ) : null}

                                                    {/* Render subfolders */}
                                                    {selectedTab === 'Images' && selectedFolder.subfolders && selectedFolder.subfolders.length > 0 ? (
                                                        selectedFolder.subfolders.map((subfolder: GalleryFolderData, index: number) => (
                                                            <li key={index} onClick={() => this.handleGalleryFolderClick(subfolder)}>
                                                                <img src='https://pluspng.com/img-png/folder-png-education-folder-icon-image-23346-2400.jpg' alt="image" style={{ width: '100%', height: 'auto', borderRadius: '15px', cursor: 'pointer' }} />
                                                                <p>{subfolder.name}</p>

                                                                {/* Check if this subfolder has further subfolders */}
                                                         
                                                            </li>
                                                        ))
                                                    ) : null}

                                                </ul>
                                            </div>
                                            <div className="section-part clearfix">
                                                <ul className="clearfix" style={{ display: 'flex', gap: '40px' }}>
                                                    {/* Render videos */}
                                                    {selectedTab === 'Videos' && selectedFolder.videos.length > 0 ? (
                                                        selectedFolder.videos.map((videoUrl: string, index: number) => (
                                                            <li key={index} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => this.handleVideoClick(videoUrl)}>
                                                                <video controls style={{ width: '223px', height: '149px', marginRight: '10px' }}>
                                                                    <source src={videoUrl} type="video/mp4" />
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                            </li>
                                                        ))
                                                    ) : selectedTab === 'Videos' ? (
                                                        <li style={{ marginBottom: '10px' }}>No videos</li>
                                                    ) : null}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="inner-page-contents gallery-viewall-folders">
                            <div className="top-news-sections category-news-sec m-b-20">
                                <div className="sec">
                                    <div className="row">
                                        <div className="col-md-12 category-main-lists">
                                            <div className="section-part clearfix">
                                                <ul className="clearfix">
                                                    {/* Render folders */}
                                                    {galleryFoldersData.map((folder, index) => (
                                                        <li key={index} onClick={() => this.handleGalleryFolderClick(folder)}>
                                                            <img src={folder.image[0]} alt="folder image" style={{ width: '223px', height: '149px', borderRadius: "15px" }} />
                                                            <p>{folder.name}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Render lightbox */}
                    {selectedFolder && (selectedImageIndex !== null || selectedVideo !== null) && lightboxOpen ? (
    <div className="lightbox">
        <div className="gallery-lightbox-contents">
            <div className="lightbox-contents-img">
                <div className="lightbox-contents-header clearfix">
                    <h4>{selectedImageIndex !== null ? `Image ${selectedImageIndex + 1}` : 'Video'}</h4>
                    <ul>
                        <li><a>Videos</a></li>
                        <li><a onClick={this.lightboxvideoclick} href="#">{showGridView ? 'Close Grid View' : 'Grid View'}</a></li>
                    </ul>
                </div>
                <div className="lightbox-contents-body" id="lightgallery">
                    {selectedImageIndex !== null ? (
                        <>
                        <img src={selectedFolder.image[selectedImageIndex]} alt="image" />
                        </> ) : 
                    selectedVideo !== null ? (
                        <div className="lightbox-contents-body" id="lightgallery">
                        <video controls>
                            <source src={selectedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ) : null}
                </div>
                {showGridView && (
                    <div className="lightbox-conent-thumbnails">
                        <ul className="clearfix">
                            {selectedFolder.image.map((image: string, index: number) => (
                                <li key={index} className={selectedImageIndex === index ? 'active' : ''} onClick={() => this.handleImageClick(index)}>
                                    <img src={image} alt="image" style={{ borderRadius: '14px', cursor: 'pointer' }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="lightbox-close" onClick={this.handleLightboxClose}>
                    <img src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/SiteAssets/img/img%20(1)/close.svg" alt="close" />
                </div>
            </div>
        </div>
    </div>
) : null}

                </div>
            </div>
        );
    }
}

export default GalleryPage;

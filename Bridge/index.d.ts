/**
 * Represents the Adobe Bridge application.
 * A single global instance is created on startup; access it using the app global variable. There is only one App object. Multiple browser windows are represented by instances ofDocument, and can be accessed with the app.document or app.documents properties.
 */
declare class App {
	/**
	 * A collection of the default FilterDescription objects used to populate the Filter palette.
	 */
	defaultFilterCriteria: Array;

	/**
	 * A collection of the default SortCriterion objects used to sort the contents of container nodes.
	 * Default list is: Filename, Document type, Date created, Date file modified, File size, Dimensions, Resolution, Color profile, Label, Rating
	 */
	defaultSortCriteria: Array;

	/**
	 * The policy for the display of modal dialogs.
	 * One of:
	 * all (default): Modal dialogs should always be displayed.
	 * none: Modal dialog should never be displayed.
	 * error: Only dialogs that report an error to the user should be displayed.
	 */
	displayDialogs: string;

	/**
	 * The active (top-most) Document object, representing the active browser window.
	 * During an open or create event, this value still contains the previous Document object, while the new Document object is passed to the event handler.
	 */
	document: Document;

	/**
	 * A collection of Document objects representing the set of all open browser windows.
	 */
	documents: Array;

	/**
	 * An array ofevent handler objects installed by scripts.
	 * Add an event-handler object to register it with Adobe Bridge. Registered handler functions are called when any user-interaction event is triggered.Each event handler is specified by a JavaScript object with one property, the handler function name: ={ handler: fnName}= The handler function takes one argument, an Event object, and returns a result object ={handled: boolean}=.
	 * When true, the event has been completely handled and Adobe Bridge does not look for more handlers or call the default handler.
	 * When false (or when the handler returns undefined), Adobe Bridge continues to call registered handlers, or if there are no more, calls the default handler.
	 */
	eventHandlers: Array;

	/**
	 * A collection of ExtensionHandler objects representing registered node-handling extensions.
	 * Use app.registerExtension() and app.unregisterExtension() to modify the list.
	 */
	extensions: Array;

	/**
	 * The top-level Favoritesobject for the navigation hierarchy displayed in the Favorites palette.
	 * This object contains two arrays of Thumbnailobjects for the nodes that appear in the "standard" and "user" sections of the palette.
	 */
	favorites: Favorites;

	/**
	 * The list of Bridge URI strings for the root nodes of the Folders palette.
	 * Extension developers can modify the list with app.addCustomRoot().
	 */
	folderRoots: Array;

	/**
	 * The collection of script-defined InspectorPanel objects that make up the Inspector view for new browser windows.
	 * The list is in display order. Use app.registerInspectorPanel() and app.unregisterInspectorPanel()to modify the list.
	 */
	inspectorPanels: Array;

	/**
	 * The display name of the language for the current locale, as configured by the operating system.
	 * This is the language name as it appears in the Preferences dialog.
	 */
	language: string;

	/**
	 * The application specifier for the application that has most recently sent an interapplication message to Adobe Bridge.
	 */
	lastSender: string;

	/**
	 * The Adobe locale code for the current locale, as configured by the operating system.
	 * An Adobe locale code consists of a 2-letter ISO-639 language code and an optional 2-letter ISO 3166 country code separated by an underscore. Case is significant. For example, en_US, en_UK, ja_JP, de_DE, fr_FR.
	 */
	locale: string;

	/**
	 * The application specifier for this application, "bridge".
	 */
	name: string;

	/**
	 * The number of background tasks that Adobe Bridge has left to process.
	 * Background tasks are started for asynchronous operations, such as metadata extraction from thumbnails, or exporting the cache with app.buildFolderCache(). When all tasks have been started, this value is 0. A value of 0 does not mean that all started tasks have been completed.
	 */
	pendingJobs: number;

	/**
	 * The Preferences object, which provides access to the user preferences shown in the Preferences dialog.
	 */
	preferences: Preferences;

	/**
	 * 
	 */
	standardFavorites: Array;

	/**
	 * When true, Adobe Bridge attempts to ensure that all Thumbnail properties are valid before returning their values.
	 * This is particularly important when accessing metadata. Scripts (other than node handlers) typically need to set synchronous mode to true. Default is false, for performance reasons.
	 */
	synchronousMode: boolean;

	/**
	 * 
	 */
	userFavorites: Array;

	/**
	 * The version number of the Adobe Bridge application.
	 */
	version: string;

	/**
	 * The duration in seconds between checks for folder consistency (checking whether files have been added or removed).
	 */
	watchDirInterval: number;

	/**
	 * The list of all available workspaces, both default and user- or script-defined.
	 * Each workspace is a JavaScript object with two properties,idandname , specifying the unique identifier and the localized display name; see Document.workspace.
	 */
	workspaces: Array;

	/**
	 * For each specified file or folder, if it refers to a resource that does not have a local copy (such as the files referenced by VersionCue nodes), downloads the resource.
	 * For efficiency, make one call for all files to be processed, rather than calling repeatedly.
	 * @param files An array of strings, each of which is a file or folder specification
	 */
	acquirePhysicalFiles(files: Array): void;

	/**
	 * Adds a member thumbnail, or set of member thumbnails, to a collection.
	 * Returns true on success.
	 * @param collection The Thumbnail object for the collection node, as returned by app.createCollection().
	 * @param member A Thumbnail object or Array of Thumbnail objects to be added to the collection.
	 */
	addCollectionMember(collection: Thumbnail, member: any): boolean;

	/**
	 * Appends a line of text to the Credits section of the Adobe Bridge About box.
	 * @param title The unique identifying string for this addition.
	 * @param content The localizable string to be displayed.
	 */
	addCredits(title: string, content: string): any;

	/**
	 * Appends a custom URI to the list of root nodes in app.folderRoots, which appear in the Folders palette.
	 * Used by script-defined node handlers. Returns true on success.
	 * @param uri The Bridge URI string.
	 */
	addCustomRoot(uri: string): boolean;

	/**
	 * Appends a line of text to the Legal Notice section of the Adobe Bridge About box.
	 * @param title The unique identifying string for this addition.
	 * @param content The localizable string to be displayed.
	 */
	addLegalNotice(title: string, content: string): any;

	/**
	 * Calls on the operating system to emit a short audio tone.
	 */
	beep(): void;

	/**
	 * Gives Adobe Bridge the application focus for the operating system, and makes the current browser window the topmost active window in the windowing system.
	 */
	bringToFront(): void;

	/**
	 * Deprecated in Creative Suite 3. Do not use.
	 */
	browseTo(): any;

	/**
	 * Forces Adobe Bridge to create thumbnail images for the specified folder.
	 * The images are stored in a cache file in the folder to which they apply.
	 * @param path The folder. A Folder object, Thumbnail object for a folder, or Bridge URI path string. If this specifies a file, the cache is built for the containing folder.
	 * @param recurse Optional in Adobe Bridge 1.0, not used in Adobe Bridge 2.0. Cache building is always recursive; pass true.
	 * @param quality Whether to create low or high quality thumbnail images. One of the strings quick (the default) or highQuality.
	 * @param buildFullSize Whether to export fullsize images to cache folder. This determines Bridge's caching behavior in the same way as the "Generate 100% Previews" drop down menu item on the toolbar. The value set to this property is also reflected by the checking status of the toolbar menu item.
	 */
	buildFolderCache(path: object, recurse?: boolean, quality?: string, buildFullSize?: boolean): any;

	/**
	 * Cancels a task that has been scheduled using app.scheduleTask().
	 * @param taskId The task ID number, as returned from app.scheduleTask().
	 */
	cancelTask(taskId: number): any;

	/**
	 * Creates a new, named collection node.
	 * Returns the Thumbnail object for the new node. Use this to access the collection programmatically.
	 * @param name The name of the new collection. If a collection with this name already exists, a unique name is generated using this string.
	 */
	createCollection(name: string): Thumbnail;

	/**
	 * Creates a new, named smart collection node.
	 * Returns the Thumbnail object for the new node. Use this to access the collection programmatically.
	 * @param name The name of the new smart collection. If a collection with this name already exists, a unique name is generated using this string.
	 * @param scope A Thumbnail object for the target container node.
	 * @param searchSpec A SearchSpecification object used to generate the search result.
	 */
	createSmartCollection(name: string, scope: Thumbnail, searchSpec: SearchSpecification): Thumbnail;

	/**
	 * Deletes a collection node.
	 * Returns true on success.
	 * @param collection The Thumbnail object for the collection node, as returned by app.createCollection().
	 */
	deleteCollection(collection: Thumbnail): boolean;

	/**
	 * Deletes a smart collection node.
	 * Returns true on success.
	 * @param collection The Thumbnail object for the collection node, as returned by app.createSmartCollection().
	 */
	deleteSmartCollection(collection: Thumbnail): boolean;

	/**
	 * Enqueues a long-running node-handling operation for execution at an appropriate time.
	 * Note that, for a ProgressOperator, Adobe Bridge does not display or update the UI until the node handler calls app.operationChanged().
	 * @param operator The ModalOperator or ProgressOperator instance that encapsulates the operation, returned by an ExtensionModel method.
	 */
	enqueueOperation(operator: object): void;

	/**
	 * Exports keywords from the Keywords palette to a file.
	 * This is the same as choosing Export from the flyout menu in the Keywords palette.
	 * @param keywordsFile The file, specified as a string or ExtendScript File object.
	 */
	exportKeywordsFromFile(keywordsFile: string): void;

	/**
	 * Retrieves the collection members for a collection node.
	 * Returns an Array of TThumbnail objects for the collection members.
	 * @param collection The Thumbnail object for the collection node, as returned by app.createCollection().
	 */
	getCollectionMembers(collection: Thumbnail): Array;

	/**
	 * Retrieves all collection nodes, as created with app.createCollection().
	 * Returns an Array of Thumbnail objects for the collection nodes.
	 */
	getCollections(): Array;

	/**
	 * Retrieves all smart collection nodes, as created with app.createSmartCollection().
	 * Returns an Array of Thumbnail objects for the collection nodes.
	 */
	getSmartCollections(): Array;

	/**
	 * Hides or minimizes all Adobe Bridge browser windows.
	 * In Mac OS, performs the platform-specific hide gesture.
	 * In Windows, does the equivalent of app.document.minimize().
	 */
	hide(): void;

	/**
	 * Imports keywords from a file to the Keywords palette.
	 * This is the same as choosing Import from the flyout menu in the Keywords palette.
	 * @param keywordsFile The file, specified as a string or ExtendScript File object.
	 * @param importType Whether to replace existing keywords in the palette, or merge these keywords with any existing keywords in the palette. One of "clearExistingKeywords" or "mergeWithExistingKeywords" (the default).
	 */
	importKeywordsFromFile(keywordsFile: string, importType?: string): void;

	/**
	 * Reports whether a given thumbnail is a member of a given collection.
	 * Returns true if the thumbnail is a member.
	 * @param collection The Thumbnail object for the collection node, as returned by app.createCollection().
	 * @param member The Thumbnail object for the node to be tested.
	 */
	isCollectionMember(collection: Thumbnail, member: Thumbnail): boolean;

	/**
	 * Reports whether Adobe Bridge is processing any jobs. Returns false if all the jobs are finished.
	 */
	isProcessingJob(): boolean;

	/**
	 * Opens a page in the platform's default web browser.
	 * @param url The URL for the page to open.
	 */
	openUrl(url: string): void;

	/**
	 * Notifies Adobe Bridge of an update to the processing status or progress of a long-running background operation implemented by a ProgressOperator object.
	 * Adobe Bridge queries the object to find the current status and updates the UI as appropriate. It does not display or update the UI until this call is made.
	 * @param operator The ProgressOperator object that encapsulates the operation. This object is returned by an ExtensionHandler or ExtensionModel method.
	 */
	operationChanged(operator: ProgressOperator): void;

	/**
	 * DEPRECATED in Creative Suite 3. Use app.acquirePhysicalFiles() instead.
	 */
	preflightFiles(files: void): boolean;

	/**
	 * Purges the thumbnail caches for all folders.
	 * See alsoapp.buildFolderCache()and app.purgeFolderCache().
	 */
	purgeAllCaches(): void;

	/**
	 * Purges the thumbnail cache for a folder.
	 * See alsoapp.buildFolderCache()and app.purgeFolderCache().
	 * @param path The folder to purge. A Folder object, Thumbnail object for a folder, or Bridge URI path string. If this specifies a file, the cache is purged for the containing folder. If not supplied, purges all folder caches.
	 */
	purgeFolderCache(path?: object): any;

	/**
	 * Shuts down the Adobe Bridge application and closes all browser windows.
	 */
	quit(): void;

	/**
	 * DEPRECATED in Creative Suite 3. Do not use.
	 */
	registerBrowseScheme(protocol: string, handler: object): boolean;

	/**
	 * Adds a script-defined node-handling extension to the application's list of available handlers, app.extensions.
	 * Returns true on success, false if there is an existing extension with the same name.
	 * @param extension The ExtensionHandler object.
	 */
	registerExtension(extension: ExtensionHandler): boolean;

	/**
	 * Declares a new node-data information set, associating it with a node-handling extension.
	 * Sets can be associated with multiple handlers. All handlers must support the core sets. Registering a set makes the defined properties available to node display code. Returns true on success.
	 * @param extension The ExtensionHandler object.
	 * @param infoset The Infoset object.
	 */
	registerInfoset(extension: ExtensionHandler, infoset: Infoset): boolean;

	/**
	 * Registers a script-defined Inspector panel, adding it to app.inspectorPanels.
	 * This panel appears in the Inspector palette unless the selected thumbnail explicitly disallows it.
	 * @param panel The InspectorPanel object.
	 */
	registerInspectorPanel(panel: InspectorPanel): boolean;

	/**
	 * Associates a URI prefix string with a node-handling extension.
	 * The prefix identifies a node type managed by the handler. Handlers can register multiple prefixes.
	 * @param prefix The prefix string , which must contain only ASCII characters.
	 * @param extension The ExtensionHandler object.
	 */
	registerPrefix(prefix: string, extension: ExtensionHandler): boolean;

	/**
	 * Removes one or more member thumbnails from a collection.
	 * Returns true on success.
	 * @param collection The Thumbnail object for the collection node, as returned by app.createCollection().
	 * @param member The Thumbnail object for the node to be removed, or an Array of Thumbnail objects.
	 */
	removeCollectionMember(collection: Thumbnail, member: any): boolean;

	/**
	 * Removes a text item from the Credits area of the Adobe Bridge About box.
	 * The text must have been previously added with addCredits().
	 * @param title The unique identifying string for the item to remove.
	 */
	removeCredits(title: void): any;

	/**
	 * Removes a text item from the LegalNotice area of the Adobe Bridge About box.
	 * The text must have been previously added with addLegalNotice().
	 * @param title The unique identifying string for the item to remove.
	 */
	removeLegalNotice(title: void): any;

	/**
	 * 
	 */
	renameCollection(arg1: Thumbnail, name: string): Thumbnail;

	/**
	 * 
	 */
	renameSmartCollection(arg1: Thumbnail, name: string): Thumbnail;

	/**
	 * Loads a set of files or thumbnails as a slideshow, using the Preference options currently set for Adobe Bridge.
	 * @param sources An array of Thumbnail objects or file path strings.
	 */
	runSlideshow(sources: Array): void;

	/**
	 * Executes a script after a specified delay.
	 * The script can be executed repeatedly, stopping when it returns undefined, or when you cancel the task using app.cancelTask().
	 * Returns the task ID number, which can be used to cancel the scheduled task.
	 * @param script A string containing the script to be run. If this script needs to load another script, do not use the JavaScript eval() function; instead use the $.evalFile() function.
	 * @param delay A number of milliseconds to wait before executing the script. If 0, waits the default number of milliseconds, which is 10.
	 * @param repeat When true, execute the script repeatedly after each elapsed delay. Stops when a script execution returns undefined, or when this task is cancelled by calling app.cancelTask(). Default is false, which means execute the script only once.
	 */
	scheduleTask(script: string, delay: number, repeat?: boolean): number;

	/**
	 * Issues the argument to the operating system, as if it were entered on the command line in a shell.
	 * Control does not return to Adobe Bridge until this function returns.
	 * @param commandLine The command to pass to the operating system.
	 */
	system(commandLine: string): any;

	/**
	 * Removes a node-handling extension, previously registered with app.registerExtension(), from the application’s global list.
	 * @param extension The ExtensionHandler object.
	 */
	unregisterExtension(extension: ExtensionHandler): void;

	/**
	 * Removes the association between an extension and an information set, previously established with app.registerInfoset().
	 * @param extension The ExtensionHandler object.
	 * @param infoset The Infoset object.
	 */
	unregisterInfoset(extension: ExtensionHandler, infoset: Infoset): any;

	/**
	 * Removes a script-defined Inspector panel from the global list in app.inspectorPanels().
	 * @param panel The InspectorPanel object.
	 */
	unregisterInspectorPanel(panel: InspectorPanel): boolean;

	/**
	 * Removes a node URI prefix from the list of prefixes that the associated node-handling extension manages.
	 * @param prefix The prefix string.
	 * @param extension The ExtensionHandler object.
	 */
	unregisterPrefix(prefix: string, extension: ExtensionHandler): boolean;

}

/**
 * Represents an image as a matrix of pixell.
 * Pixels are described by four channels: red, green, blue, and an "alpha" channel that represents the opacity of the pixel. Each channel stores a number between 0 and 255. For the color channels, 0 means an absence of that color and 255 means the maximum amount of that color. For the alpha channel, 0 means the pixel is completely transparent and 255 means it is completely opaque.This object allows direct manipulation of the pixels in memory. They are assumed to be stored in row-major order, with consecutive bytes for red, green, blue, and alpha channel. Each row may have some padding at the end, and the total width of a row, in bytes, is represented by rowBytes. The maximum width and maximum height of a BitmapData object is 8192 pixels.Create the object using the new operator: There are three forms of the constructor:new BitmapData (width, height, transparent*, fillColor*)new BitmapData (file[, preserveColorProfile])new BitmapData (width, height, transparent, rowBytes, data)Parameters set corresponding properties, or specify the source data, directly or indirectly. Specify true for preserveColorProfile to preserve the embedded color profile, if any. If none is present, or if not supplied, embeds the default sRGB profile. Note that ACR cannot be used with a preserved embedded profile; it returns all images with an sRGB profile which would conflict with the desired color profile behavior. If you choose to preserve the embedded profile, the standard JPEG or TIFF libraries are used, even if the thumbnail preference "Use ACR for JPEG and TIFF" is set.
 */
declare class BitmapData {
	/**
	 * 
	 */
	channelCount: number;

	/**
	 * A 32-bit Adler checksum of the image data.
	 * Use to compare two object to see if they represent the same image.
	 */
	checksum: number;

	/**
	 * 
	 */
	colorSpace: number;

	/**
	 * Image height in pixels.
	 */
	height: number;

	/**
	 * A pointer to the buffer storing the matrix of pixels.
	 */
	pointer: number;

	/**
	 * The rectangle that defines the size of the bitmap image, in the format [0, 0, w, h]. Origin is top left.
	 */
	rectangle: Array;

	/**
	 * The length in bytes of a row of pixels.
	 * This provides the offset from a given pixel to the pixel immediately below it, allowing for padding at the end of each line. Because a pixel is typically represented by 4 bytes, the value is usually around 4 times bigger than the width in pixels. Typically, rows are padded to multiples of 4, sometimes 16. For example, if a bitmap is 3 pixels wide, width is 3, and rowBytes could be 12 or 16.
	 */
	rowBytes: number;

	/**
	 * True if the bitmap image supports per-pixel transparency.
	 */
	transparent: boolean;

	/**
	 * Image width in pixels.
	 */
	width: number;

	/**
	 * Duplicates this object, creating a new object with an exact copy of the contained bitmap.
	 * Returns the new BitmapData object.
	 */
	clone(): BitmapData;

	/**
	 * Explicitly frees the memory used to store pixel data for this object.
	 * If not called, the JavaScript garbage collector eventually frees the memory when there are no references remaining.
	 */
	dispose(): void;

	/**
	 * Writes the image data to a file in JPEG format.
	 * @param dest AFile object or a string containing the platform-specific path and filename for the target file. Creates the file if it does not exist, or overwrites an existing file. It is recommended that the file name have an extension of ".jpg".
	 * @param jpegQuality The quality of the image. A number in the range [0..100] where 100 is the highest quality image and largest file size, and lower values indicate more compression, lossier image, and smaller file size. Default is 60 (equivalent to Photoshop quality 7).
	 */
	exportTo(dest: File, jpegQuality?: number): void;

	/**
	 * Retrieves the color data for a specific pixel from the image.
	 * If the transparent property for this object is true, the returned color number is pre-multiplied.Returns an integer that represents the ARGB pixel value. This can be used to create a Color object.
	 * @param x The horizontal coordinate of the pixel, relative to the bitmap's origin, the top left.
	 * @param y The vertical coordinate of the pixel, relative to the bitmap's origin, the top left.
	 */
	getPixel(x: number, y: number): number;

	/**
	 * Retrieves the color data for a specific pixel from the image, including its alpha channel.
	 * Returns an integer that represents the ARGB pixel value. This can be used to create a Color object.
	 * @param x The horizontal coordinate of the pixel, relative to the bitmap's origin, the top left.
	 * @param y The vertical coordinate of the pixel, relative to the bitmap's origin, the top left.
	 */
	getPixel32(x: number, y: number): number;

	/**
	 * Loads the JPEG stream at a memory address into this object, replacing the previous content.
	 * The object is resized, if necessary.
	 * @param data The address of the data stream. A 32-bit value or an array of two elements containing the low word and high word of a 64-bit address.
	 * @param dataSize The length of the data buffer in bytes.
	 */
	loadFromJpegStream(data: number, dataSize: number): void;

	/**
	 * Loads the PNG stream at a memory address into this object, replacing the previous content.
	 * The object is resized, if necessary.
	 * @param data The address of the data stream. A 32-bit value or an array of two elements containing the low word and high word of a 64-bit address.
	 * @param dataSize The length of the data buffer in bytes.
	 */
	loadFromPngStream(data: number, dataSize: number): void;

	/**
	 * Resizes the bitmap to the specified dimensions.
	 * The target dimensions must be smaller than the largest of the current bitmap dimensions.Returns a new BitmapData object whose sides are no greater than the specified dimensions, or undefined if the object already satisfies this condition.
	 * @param dimensions The desired edge size, in pixels, of the resized image. The resized image is obtained by scaling down the source image to fit into a square with sides that are this number of pixels.
	 * @param quality The algorithm to use in scaling, which trades off image quality and execution time. One of "bilinear" (the default), a lower quality image but faster scaling; or "bicubic", a higher quality image but slower scaling; or "bicubicSharper", slowest but best quality.
	 */
	resize(dimensions: number, quality?: string): BitmapData;

	/**
	 * Rotates the bitmap by the specified multiple of 90 degrees.
	 * Returns a new BitmapData object containing the rotated image.
	 * @param angle The rotation angle in degrees. Positive values rotate clockwise, negative values rotate counterclockwise. Allowed values are -90, 0, 90, 180, 270.
	 */
	rotate(angle: number): BitmapData;

	/**
	 * Sets the color data for a specific pixel from the image.
	 * The alpha channel is set to 255 (fully opaque).
	 * @param x The horizontal coordinate of the pixel, relative to the bitmap's origin, the top left.
	 * @param y The vertical coordinate of the pixel, relative to the bitmap's origin, the top left.
	 * @param color The color. A Color object, or an integer that represents the RGB pixel value, or a predefined color name string.
	 */
	setPixel(x: number, y: number, color: object): void;

	/**
	 * Sets the color data for a specific pixel from the image, including its alpha channel.
	 * @param x The horizontal coordinate of the pixel, relative to the bitmap's origin, the top left.
	 * @param y The vertical coordinate of the pixel, relative to the bitmap's origin, the top left.
	 * @param color The color. A Color object, or an integer that represents the RGB pixel value, or a predefined color name string.
	 */
	setPixel32(x: number, y: number, color: object): void;

}

/**
 * Encapsulates all node-handling data and the node handler for a Thumbnail object.
 * This object associates a Thumbnail object with the ExtensionModel object that handles the node and that defines additional node data. The cache collects all currently defined node data. This object actually contains the ExtensionModel object that is created for the thumbnail, as well as the associated Infoset objects. Each Infosetobject in the cache is associated with a CacheData object object that contains its cache status.When Adobe Bridge needs to display a handled node, it instantiates this object. It creates the ExtensionModel object using the handler’s makeModel() method, and stores it in the CacheElement. It then passes the CacheElement object to the node handler’s model method registerInterest().Your implementation of the registerInterest() method must store the cache object (typically in the model object's privateData property) so that the model’s refreshInfoset() method can use it to update the data.
 */
declare class CacheElement {
	/**
	 * Core data set.
	 * Member "badges" contains an array of Badge objects representing the node’s status icons. A node in the Content pane can have up to four badge icons.
	 */
	badges: Infoset;

	/**
	 * Core data set.
	 * Member "rawSupportType" identifies the extent to which this file can be handled by the Camera Raw plug-in. One of: 0 (the file is of a type that is not handled by the plug-in), 1 (the file is in a camera-raw format), 2 (the file is in JPEG or TIFF format)
	 */
	cameraRaw: Infoset;

	/**
	 * Core data set.
	 * Member "children" contains an Array of Thumbnail objects representing the child nodes of a container node. Container nodes must update their child node lists.
	 */
	children: Infoset;

	/**
	 * Core data set.
	 * Member "fullsize" contains aBitmapData object representing the pixels for the file's full-size preview thumbnail image.
	 */
	fullsize: Infoset;

	/**
	 * Core data set.
	 * Member "bitmap" contains aBitmapData object representing the pixels for the node’s icon.
	 */
	icon: Infoset;

	/**
	 * Core data set.
	 * Contains mandatory node information, supplied at node creation.
	 */
	immediate: Infoset;

	/**
	 * Core data set.
	 * Node information that can be determined without opening and inspecting the contents of the referenced file.
	 */
	item: Infoset;

	/**
	 * Core data set.
	 * Node information that must be determined by opening the referenced file.
	 */
	itemContent: Infoset;

	/**
	 * Core data set.
	 * Member "linkTarget" contains a string, the full path to the target, if this node is a link.
	 */
	linkTarget: Infoset;

	/**
	 * Core data set.
	 * Member "metadata" contains the metadata blob for the file, if applicable
	 */
	metadata: Infoset;

	/**
	 * The path of the asset associated with this object.
	 */
	path: string;

	/**
	 * Core data set.
	 * Member "preview" contains aBitmapData object representing the pixels for the file's preview thumbnail image. Member "hasHighQualityThumbnail" is true if the file contains a high-quality preview image.
	 */
	preview: Infoset;

	/**
	 * Core data set.
	 * This is the authoritative source of displayed values, although the same properties are also kept in various other places.
	 */
	quickMetadata: Infoset;

	/**
	 * Core data set.
	 * Member "thumbnail" contains aBitmapData object representing the pixels for the file's thumbnail image. Member "hasHighQualityThumbnail" is true if the file contains a high-quality thumbnail image.
	 */
	thumbnail: Infoset;

	/**
	 * Calls the authenticate() method defined in the ExtensionHandler object associated with this element.
	 */
	doAuthentication(): void;

}

/**
 * Tracks the current cache status of node data in an Infoset object.
 * This object associates a cache status with each IInfoset object in a CacheElement object. The status determines whether the data needs to be refreshed.Your ExtensionModel object method for refreshInfoset() should update the cache status for each data set it updates, including core data sets.
 */
declare class CacheData {
	/**
	 * Opaque storage to aid extensions in discovering the cache status.
	 * The string contains data in an extension-defined format.
	 */
	cookie: string;

	/**
	 * The cache status for a member of the associated information set, or of the set itself.
	 * One of:
	 * good Known valid data.
	 * bad Was good at one point, but not now.
	 * unknown
	 * inProgress The status after a refresh has been requested but before the data is confirmed as good.
	 * invalid The status is invalid if the ExtensionModel Object no longer exists.
	 */
	status: string;

}

/**
 * Represents a pixel in the sRGB color space, with an optional alpha channel for opacity.
 */
declare class Color {
	/**
	 * Degree of opacity when the color is composited.
	 * An integer in the range [0..255]. If not specified, default is 255, fully opaque.
	 */
	alpha: number;

	/**
	 * Blue component value.
	 * An integer in the range [0..255].
	 */
	blue: number;

	/**
	 * Green component value.
	 * An integer in the range [0..255].
	 */
	green: number;

	/**
	 * The color expressed as a 32-bit ARGB value.
	 */
	number: number;

	/**
	 * Red component value.
	 * An integer in the range [0..255].
	 */
	red: number;

	/**
	 * Retrieves the hexadecimal value of this color, including the alpha channel.
	 * Returns a text string, such as "#FF00FF00" for fully-opaque green.
	 */
	toString(): string;

}

/**
 * Represents an Adobe Bridge browser window.
 * The user can create multiple browser windows by selecting the New Window command in the File menu. For each browser window, there is one Document instance.
 * Access the object for the active browser window usingapp.document
 * Access an array of objects for all open browser windows in app.documents
 */
declare class Document {
	/**
	 * Identifies up to four lines of additional metadata to display for thumbnails in the Content pane.
	 * Overrides the values set in the Additional Thumbnail Metatdata drop-down lists and checkboxes in the General page of the Preferences dialog, and any value set in Preferences.extraMetadata, but does not change the preference values.The first value in the array sets the first line of additional metadata, the second value sets the second line, and so on. An array value of undefined turns off the display of metadata for that line. Allowed values are: author, bit-depth, color-mode, color-profile, copyright, date-created, date-modified, description, dimensions, document-creator, document-kind, exposure, file-size, focal-length, keywords, label, opening-application
	 */
	additionalMetadata: Array;

	/**
	 * Whether to allow drag-and-drop of thumbnails in this browser window.
	 * When true (the default), drag-and-drop of thumbnails is allowed in this browser window. When false, thumbnails cannot be dragged within or from this browser window.
	 */
	allowDrags: boolean;

	/**
	 * DEPRECATED. Use navbars.filesystem.bottom.
	 */
	bottomNavbar: void;

	/**
	 * The browser window mode, corresponding to the UI button on the upper right, "Switch to compact mode".
	 * Value can be full or compact. Ultra-compact mode has no scripting equivalent.
	 */
	browserMode: string;

	/**
	 * DEPRECATED. Do not use.
	 */
	content: void;

	/**
	 * DEPRECATED. Do not use.
	 */
	contentPaneMode: string;

	/**
	 * The Thumbnail object a user has right-clicked to invoke a context menu; otherwise undefined.
	 */
	context: Thumbnail;

	/**
	 * Whether to display Inspector panels.
	 * When true, this browser window displays the Inspector palette, showing the panels listed inapp.inspectorPanels. When false, the Inspector is not shown.
	 */
	displayInspectorView: boolean;

	/**
	 * Current selected thumbnails in the Content pane.
	 * A list of selections in the current Content page, where each member is an array containing a single selected Thumbnail object, or an array of Thumbnail objects that make up a selected stack.
	 */
	groupedSelections: Array;

	/**
	 * The height of the browser window in pixels.
	 * Legal values are positive integers. The window is resized only within the limits of the minimum and maximum size allowed by the screen resolution.
	 */
	height: number;

	/**
	 * In Windows only, a platform-specific handle to the window for this browser.
	 */
	hwnd: number;

	/**
	 * A unique identifier for the browser window, valid for the life of the window.
	 * It is possible for more than one Document object to reference the same window.
	 */
	id: number;

	/**
	 * DEPRECATED. Do not use.
	 */
	jsFuncs: void;

	/**
	 * When true, this browser window is in the zoomed or maximized state.
	 */
	maximized: boolean;

	/**
	 * When true, this browser window is in the collapsed or minimized state.
	 * In Mac OS, a window can be in the zoomed state, and still be minimized. If both Document.maximized and Document.minimized are true, call restore() to un-zoom the window.
	 */
	minimized: boolean;

	/**
	 * Contains the predefined NavBar objects for the configurable navigation bars.
	 * To access the navigation bars that can be shown when the Content pane displays files and folders, use navbars.filesystem.top and navbars.filesystem.bottom.
	 * Both of the two bars can be configured to display ScriptUI controls, and are hidden by default.
	 */
	navbars: object;

	/**
	 * Text to be displayed in the Content pane when the selected thumbnail is for an empty folder.
	 * The default is "No Items to Display".
	 */
	noItems: string;

	/**
	 * The Adobe Bridge-enabled application that created or first activated this browser window, if it was not Adobe Bridge.
	 * An application specifier, such as "photoshop".
	 */
	owner: string;

	/**
	 * A collection of TabbedPalette objects for all default and script-defined display palettes available to this browser, regardless of their visibility status.
	 */
	palettes: Array;

	/**
	 * The position of this browser window on the screen.
	 * An object with two properties, x and y, whose value is the point of the screen coordinates, the screen coordinates are relative to the upper-left corner of the main display.
	 */
	position: object;

	/**
	 * The presentation mode of the Content pane.
	 * The value is always "browser" in Bridge CC, in correspondence with that setPresentationMode() and presentationPath supports the "browser" mode only.
	 */
	presentationMode: string;

	/**
	 * The path to the content displayed in the Content pane.
	 * A Bridge URI, which is a valid filesystem path that Adobe Bridge can interpret. This property no longer supports URL. To display HTML page, use TabbedPalette.
	 */
	presentationPath: string;

	/**
	 * The number of currently selected thumbnails in the Content pane.
	 */
	selectionLength: number;

	/**
	 * The Thumbnail objects for all currently selected files in the Content pane of this document.
	 * Change the selections using theselect(), selectAll(), deselect() and deselectAll() methods. A script should wait until the loaded event has occurred before making calls to document selection methods.
	 * Use getSelection() to limit the request to visible thumbnails, or those for files of a given type. Use groupedSelections to include thumbnails that are in selected stacks.NOTE: Accessing this value is a time-intensive operation. To improve performance, access it outside loops. Also, use selectionLength when possible, rather than checking the length of this array.
	 */
	selections: Array;

	/**
	 * The number of currently selected thumbnails in the Content pane.
	 */
	selectionsLength: number;

	/**
	 * When true, thumbnail names are displayed in the Content pane.
	 * This overrides the ShowName preference value.
	 */
	showThumbnailName: boolean;

	/**
	 * How the thumbnails in the Content pane are sorted.
	 * An array containing one JavaScript object, { type:String, name:String, reverse:Boolean }.
	 * The type value is one of these strings: "string", "date", "number", "dimensions", "resolution", "colorProfile", "user".
	 * The name value is one of these strings: "user", "name", "date-created", "date-modified", "label", "rating", "file-size", "document-kind", "keywords", dimensions", "resolution", "color-profile".
	 * The reverse value is true if the thumbnails are sorted in reverse order in the given category.
	 */
	sorts: Array;

	/**
	 * A list of all current thumbnail stacks in this browser.
	 * Each stack is an object with these properties and functions:
	 * thumbnails: An array of Thumbnail objects.
	 * properties: Read/write. An array that user can add and retrieve customized properties for the stack. Those properties can be stored into the cache file by calling flushStackProperties().
	 * isValid: Function. If the stack already exists and valid, the function returns true, otherwise returns false.
	 */
	stacks: Array;

	/**
	 * The text displayed in the document's status line at the bottom of the Content pane.
	 */
	status: string;

	/**
	 * The Thumbnail object for the node currently selected in the Folders or Favorites pane.
	 * Setting this value navigates to and selects the corresponding node in the Folders pane. The contents of this node are displayed in the Content pane according to its displayMode. The Thumbnail.children array is not populated until the loaded event has occurred for the document.
	 */
	thumbnail: Thumbnail;

	/**
	 * The view mode of the Content pane, as selected by the View menu.
	 * One of: thumbnails, details, list
	 */
	thumbnailViewMode: string;

	/**
	 * DEPRECATED. Use navbars.filesystem.top.
	 */
	topNavbar: void;

	/**
	 * When true, the browser window is expanded, as opposed to being minimized or collapsed.
	 * Setting visible to false collapses the window.
	 */
	visible: boolean;

	/**
	 * An array of Thumbnail objects that are currently shown in the Content pane.
	 * The array is ordered according to the current sort order, and contains only thumbnails whose visible property is true.
	 * Accessing this value is a time-intensive operation. To improve performance, access it outside loops. Also, use visibleThumbnailsLength when possible, rather than checking the length of this array.
	 */
	visibleThumbnails: Array;

	/**
	 * The number of thumbnails in the visibleThumbnails array.
	 */
	visibleThumbnailsLength: number;

	/**
	 * DEPRECATED. Do not use.
	 */
	visitUrl: void;

	/**
	 * The width of the browser window in pixels.
	 * Legal values are positive integers. The window is resized only within the limits of the minimum and maximum size allowed by the screen resolution.
	 */
	width: number;

	/**
	 * Retrieves the most recently set workspace.
	 * A workspace value isa JavaScript object with two properties, id and name, whose string values are the unique identifier and display name of the workspace. A user-defined workspace may have been renamed by the user since being set by a script.Set with Document.setWorkspace(). The current workspace can also be set by user action. Value is undefined for a new document before any workspace has been explicitly set.
	 */
	workspace: object;

	/**
	 * Makes this browser window the topmost active window in the windowing system.
	 */
	bringToFront(): void;

	/**
	 * Centers this browser window on the screen.
	 * If there is more than one monitor, centers the window on the monitor where most of the window resides.
	 */
	center(): void;

	/**
	 * Executes an Adobe Bridge-defined or script-defined menu command programatically.
	 * This is the equivalent to the user selecting the command interactively.
	 * @param menuID The unique identifier for the command to execute. Predefined identifiers for Adobe Bridge menu commands are listed in the Adobe Bridge JavaScript Reference.If the ID is for a submenu, the function does nothing.
	 */
	chooseMenuItem(menuID: string): void;

	/**
	 * Closes this browser window.
	 */
	close(): void;

	/**
	 * Deselects a node in the Content pane.
	 * If the specified Thumbnail is a child of this document and is selected, removes it from the selectionsarray and deselects it in the browser window. Returns true if the thumbnail was deselected.
	 * A script should wait until the loaded event has occurred before making calls to document selection methods.
	 * @param thumbnail The Thumbnail for the node.
	 */
	deselect(thumbnail: Thumbnail): boolean;

	/**
	 * Deselects all selected nodes in the Content pane.
	 * Removes all members from the selections array and deselects all thumbnails in the browser window. A script should wait until the loaded event has occurred before making calls to document selection methods.
	 */
	deselectAll(): void;

	/**
	 * DEPRECATED. Do not use.
	 */
	execJS(): void;

	/**
	 * Stores stack properties into the cache file.
	 */
	flushStackProperties(): void;

	/**
	 * Collects selected thumbnails for files of a given type, if any are selected.
	 * If no matching thumbnails are selected, collects matching thumbnails that are currently visible in the Content pane.Returns an Array of Thumbnail object.
	 * @param filter A comma-delimited list of file extensions to match. Can contain the wildcard character "*" to match all file extensions. "*" is the default.
	 */
	getSelection(filter?: string): Array;

	/**
	 * Maximizes or zooms this browser window.
	 */
	maximize(): void;

	/**
	 * Minimizes or docks this browser window.
	 */
	minimize(): void;

	/**
	 * Centers this browser window on the screen, and sets the height and width to 80% of the screen height and width.
	 */
	normalize(): void;

	/**
	 * DEPRECATED in Creative Suite 3. Use app.acquirePhysicalFiles() instead.
	 */
	preflightFiles(): void;

	/**
	 * DEPRECATED. Do not use.
	 */
	print(): void;

	/**
	 * Refreshes the display of this browser window.
	 */
	refresh(): void;

	/**
	 * Restores the default configuration of the tabbed palettes in this browser window.
	 * This is the equivalent of choosing Reset from the Window:Workspace menu.NOTE:This works only when browserMode is full. If browser mode is compact, it does nothing.
	 */
	resetToDefaultWorkspace(): void;

	/**
	 * Restores this browser window after it has been minimized.
	 * In Windows, makes the window user-sizeable.
	 * In Mac OS, returns the window to the user-configured size.
	 */
	restore(): void;

	/**
	 * Causes the Content pane (not the Folders or Favorites pane) to show the specified thumbnail.
	 * Scrollsthe display if necessary to make the node visible. Does not select the thumbnail.
	 * @param thumbnail The Thumbnail object.
	 */
	reveal(thumbnail: Thumbnail): void;

	/**
	 * Selects a thumbnail in the Content pane.
	 * If the specified thumbnail is a child of this document and is not selected, adds it to the selections array and selects it in the Content pane. This is the same as selecting the icon in the Content pane with Control-click. Returns true if the thumbnail was selected. A script should wait until the loaded event has occurred before making calls to document selection methods.
	 * @param thumbnail The Thumbnail object.
	 */
	select(thumbnail: void): boolean;

	/**
	 * Selects all children of the currenly selected thumbnail in the Content pane.
	 * Adds all child Thumbnail objects of the current thumbnail (in the thumbnail property) to the selections array, and selects them in the Content pane. This is the same as typing Control-a in the Content pane. A script should wait until the loaded event has occurred before making calls to document selection methods.
	 */
	selectAll(): void;

	/**
	 * Sets the presentation mode of the Content pane, and optionally the path to the current content to display.
	 * The mode determines how the presentationPath value is interpreted.CAUTION: In Bridge CC only the "browser" mode is supported. Set the presentation mode to other mode will cause the presentationPath property not working properly. To display HTML page, use TabbedPalette.
	 * @param mode The new display mode. Must be "browser" in Bridge CC, otherwise the presentationPath property will not work properly.
	 * @param path The path string, a Bridge URI.
	 */
	setPresentationMode(mode: string, path?: string): void;

	/**
	 * Sets the browser configuration to a predefined, user-defined or script-defined workspace.
	 * The current workspace can also be set by user action. A user-defined workspace may have been renamed by the user since being set by a script. If an invalid ID is assigned, the workspace is not changed. If a script-defined tabbed palette is visible when the user or a script creates a workspace, the workspace references that palette by its unique identifier. If a workspace references a script-defined tabbed palette, the palette must be created before the workspace is applied. Otherwise, the palette does not appear.NOTE:This works only when browserMode is full. If browser mode is compact, it does nothing.
	 * @param workspaceId The unique, identifying name string for the new workspace. If it is the same as the name of the current workspace, the function does nothing. Identifiers of predefined workspaces are: default, lightTable, navigator, metadata, horizontalFilmstrip, verticalFilmstrip
	 */
	setWorkspace(workspaceId: string): boolean;

}

/**
 * Defines the properties and methods needed to extend the Adobe Bridge node model.
 * To extend the node-handling behavior of Adobe Bridge, you must implement these properties and methods to define you own node type and handler. See Adobe Bridge JavaScript Guide and Adobe Bridge JavaScript Reference for complete details.
 * Register a script-defined extension handler withapp.registerExtension(). You can access the global list of all registered extensions through app.extensions.
 * Your node-handling extension defines a node type. Your node types are identified by a Bridge URI prefix. You must associates your handler with at least one prefix, using app.registerPrefix().
 */
declare class ExtensionHandler {
	/**
	 * Implement a function thatacquires actual file data for a set of placeholder nodes.
	 * This function creates and returns a ModalOperator or ProgressOperator to perform the long-running operation.
	 */
	acquirePhysicalFiles: Function;

	/**
	 * Implement a function that duplicates a set of nodes that are handled by this handler.
	 * This function creates and returns a ModalOperator or ProgressOperator to perform the long-running operation.
	 */
	duplicate: Function;

	/**
	 * Implement a function that converts a path string to a canonical Bridge URI.
	 * A canonical URI includes the node-type identifying prefix. The function takes one argument, the path string to process. If the path is already in the form of a canonical Bridge URI, the method should simply return it.Return the Bridge URI string for the path, or undefined if the path cannot be parsed.
	 */
	getBridgeUriForPath: Function;

	/**
	 * Implement a function that executes an extension-defined search among Adobe Bridge nodes of an extension-defined node type.
	 * The Find dialog calls this method in response to a click on Find, if the dialog has been invoked for a node handled by this extension, or for a container that contains a handled node type.The function takes two arguments, the target Thumbnail for the search (a ), and the SearchSpecification returned by the Find dialog. Your method can store the parameters such that they can be retrieved by the ExtensionModel.getSearchDetails() method for the returned container node, or that method can recreate the specification and target by some other means. Return the search result, a Bridge URI for a container node that contains the matching nodes.
	 */
	getBridgeUriForSearch: Function;

	/**
	 * Implement a function that retrieves existing sidecar files for a set of nodes.
	 * See Adobe Bridge JavaScript Reference for details.
	 */
	getSidecars: Function;

	/**
	 * A collection of Infoset objects defining node data managed by this handler.
	 * The data members of the managed sets are reflected in handler-defined Thumbnail object properties. Modify the list with app.registerInfoset() and app.unregisterInfoset().
	 */
	infosets: Array;

	/**
	 * Implement a function that creates a model instance that implements node handling.
	 * Adobe Bridge calls this each time it needs to display a handled node.Return the new ExtensionModel object.
	 */
	makeModel: Function;

	/**
	 * New methods that are defined on Thumbnail objects that are managed by this handler.
	 * Each object property is a function definition; for example: ext.methods.fnName = function(arg1, arg2){body}. Each method can be accessed at run time through Thumbnail.fnName().
	 */
	methods: object;

	/**
	 * Implement a function that deletes a set of nodes, marking the associated files for deletion on disc by moving them to the system trash or recycle bin.
	 * This function creates and returns a ModalOperator or ProgressOperator to perform the long-running operation.
	 */
	moveToTrash: Function;

	/**
	 * The unique identifying name of this node-handling extension.
	 * Must be a valid JavaScript identifier (containing no colons or special characters, and beginning with a lowercase letter).
	 */
	name: string;

	/**
	 * A collection of lexical prefix strings for Bridge URIs.
	 * Prefixes identify node types for which this handler supplies a model. Modify the list with app.registerPrefix() and app.unregisterPrefix().
	 */
	prefixes: Array;

	/**
	 * Implement a function that sets the rotation setting in metadata for a set of thumbnails to the same value for all. Does not rotate image bits.
	 * This function creates and returns a ModalOperator or ProgressOperator to perform the long-running operation.
	 */
	rotate: Function;

	/**
	 * Implement a function that sets the labels for a set of thumbnails.
	 * This function creates and returns a ModalOperator or ProgressOperator to perform the long-running operation.
	 */
	setLabels: Function;

	/**
	 * Implement a function that sets the ratings for a set of thumbnails.
	 * This function creates and returns a ModalOperator or ProgressOperator to perform the long-running operation.
	 */
	setRatings: Function;

	/**
	 * Implement a function that embeds XMP file metadata packets in a set of files.
	 * This function creates and returns a ModalOperator or ProgressOperator to perform the long-running operation.
	 */
	setXmp: Function;

}

/**
 * Supports the basic framework for Adobe Bridge node-handling extensions by tracking the connection between your display model and the file or page sources.
 * To implement an extension, you must define the methods that handle nodes. See Adobe Bridge JavaScript Guide and Adobe Bridge JavaScript Reference for complete details.
 */
declare class ExtensionModel {
	/**
	 * 
	 */
	addToDrag: void;

	/**
	 * 
	 */
	authenticate: void;

	/**
	 * 
	 */
	cancelRefresh: void;

	/**
	 * 
	 */
	copyFrom: void;

	/**
	 * 
	 */
	createNewContainer: void;

	/**
	 * 
	 */
	doLosslessRotate: void;

	/**
	 * 
	 */
	eject: void;

	/**
	 * 
	 */
	exists: void;

	/**
	 * 
	 */
	getCacheStatus: void;

	/**
	 * 
	 */
	getDisplayName: void;

	/**
	 * 
	 */
	getFilterCriteria: void;

	/**
	 * 
	 */
	getParent: void;

	/**
	 * 
	 */
	getPhysicalFileName: void;

	/**
	 * 
	 */
	getSearchDefinition: void;

	/**
	 * 
	 */
	getSearchDetails: void;

	/**
	 * 
	 */
	getSortCriteria: void;

	/**
	 * 
	 */
	getUserSortOrder: void;

	/**
	 * 
	 */
	initialize: void;

	/**
	 * 
	 */
	lock: void;

	/**
	 * 
	 */
	moveFrom: void;

	/**
	 * 
	 */
	needAuthentication: void;

	/**
	 * 
	 */
	physicalFileExists: void;

	/**
	 * 
	 */
	privateData: void;

	/**
	 * 
	 */
	refreshInfoset: void;

	/**
	 * 
	 */
	registerInterest: void;

	/**
	 * 
	 */
	registerStructuralInterest: void;

	/**
	 * 
	 */
	resolveLink: void;

	/**
	 * 
	 */
	setName: void;

	/**
	 * 
	 */
	setUserSortOrder: void;

	/**
	 * 
	 */
	supportsLosslessRotate: void;

	/**
	 * 
	 */
	supportsUserSortOrder: void;

	/**
	 * 
	 */
	terminate: void;

	/**
	 * 
	 */
	unlock: void;

	/**
	 * 
	 */
	unregisterInterest: void;

	/**
	 * 
	 */
	unregisterStructuralInterest: void;

	/**
	 * 
	 */
	verifyExternalChanges: void;

	/**
	 * 
	 */
	wouldAcceptDrop: void;

}

/**
 * Provides programmatic control and customization of the Filter Panel, which allows the user to organize and filter the display of thumbnails in the Content pane.
 * Filters are applied to children of a container node when Adobe Bridge needs to display that container's contents in the Content pane, or display a list of children in a menu. A filter description identifies a metadata property (from embedded XMP metadata) or a node property (from a node-handler-defined Infoset Object) to display in the Filter palette. The Filter palette displays each filter property, with a line under each property for each value it finds for that property in any child node. The filter description can provide a narrower list of allowed values to display for an XMP property, if the property has a closed value list.When the user selects a filter, a child node is displayed only if it contains the selected filter property and value.The list of filter objects that Adobe Bridge uses by default to populate the Filter palette is kept inapp.defaultFilterCriteria. When displaying a handled container node, Adobe Bridge builds the list of filters by calling the developer-defined getFilterCriteria() method of the node's ExtensionModel object. Your implementation of this method can create these filter objects, and use them to replace, modify, or add to the default list.
 */
declare class FilterDescription {
	/**
	 * The set of allowed values for the XMP property, if it has a closed value list.
	 * An array of string values. When a property has a closed value list, the Filter palette does not count nodes that have no value for the property. You can cause it to do so by adding the empty string to this list. Empty for properties with open value types. In this case, the Filter palette displays all values found in nodes in the current scope.
	 */
	closedValueList: Array;

	/**
	 * A localized name for this filter, shown in the heading line for this filter in the Filter pane.
	 * If not supplied, the name value is used.
	 */
	displayName: string;

	/**
	 * The data type of filter-property value, used in sorting the list of values.
	 * String comparisons are case-insensitive. One of: date, dimensions, label, number, orientation, rating, string, stringList
	 */
	filterType: string;

	/**
	 * The name of the node property to use as a filter, as defined in the InfosetMemberDescription object.
	 * The filter property must be either an XMP metadata property or an Infoset object node-data property; if both are defined, the XMP property takes precedence and the node-data property is ignored.
	 */
	infosetMember: string;

	/**
	 * When true, only one of the filter values can be set at a time.
	 * When true, selecting one value in the Filter pane automatically deselects other values.
	 */
	isExclusive: boolean;

	/**
	 * The unique identifying name of the filter.
	 * If there is no displayName, this is shown in the heading line for this filter in the Filter pane.
	 */
	name: string;

	/**
	 * The namespace of the XMP property used as a filter.
	 */
	xmpNamespace: string;

	/**
	 * The key name of the XMP property used as a filter.
	 */
	xmpProperty: string;

}

/**
 * Properties and methods available in the global namespace.
 */
declare class globals {
	/**
	 * The application object.
	 */
	app: App;

	/**
	 * Displays a platform-standard dialog containing a short message and an OK button.
	 * @param message TThe string for the displayed message.
	 * @param title A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".
	 * @param errorIcon When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog. Ignored in Mac OS, which does not support icons for alert dialogs.
	 */
	alert(message: string, title?: string, errorIcon?: boolean): void;

	/**
	 * Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
	 * Returns true if the user clicked Yes, false if the user clicked No.
	 * @param message The string for the displayed message.
	 * @param noAsDefault When true, the No button is the default choice, selected when the user types Enter. Default is false, meaning that Yes is the default choice.
	 * @param title A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".
	 */
	confirm(message: string, noAsDefault: boolean, title?: string): boolean;

	/**
	 * Displays a modal dialog that returns the user’s text input.
	 * Returns the value of the text edit field if the user clicked OK, null if the user clicked Cancel.
	 * @param prompt The string for the displayed message.
	 * @param default_ The initial value to be displayed in the text edit field.
	 * @param title A string to appear as the title of the dialog. In Windows, this appears in the window’s frame; in Mac OS it appears above the message. The default title string is "Script Prompt".
	 */
	prompt(prompt: string, default_?: string, title?: string): string;

}

/**
 * Represents Adobe Bridge-defined or script-defined data for Adobe Bridge nodes.
 * For a script-defined node-handling extension, you can register an Infoset object that defines a related set of script-defined Thumbnail object properties for handled nodes. Adobe Bridge-defined Infoset objects and their members are listed in the Adobe Bridge JavaScript Reference.To declare new properties, create the Infoset object and associate it with your ExtensionHandler object usingapp.registerInfoset(). The Infoset object is added to the list in ExtensionHandler.infosets.An Infoset is a named set of data elements. Each member element has a name and type, defined by a InfosetMemberDescription object. Each member name becomes a property of the containing Infoset, and you can access the data value, of the corresponding type, through that property.
 */
declare class Infoset {
	/**
	 * The CacheData object containing cache status for this set.
	 * The status reflects whether any associated values have changed such that the set needs to be refreshed in the CacheElement object that collects all node data for this node.
	 */
	cacheData: CacheData;

	/**
	 * The descriptions of the members of this set.
	 * A collection of InfosetMemberDescription objects containing the member names and data types of data values contained in this set.
	 */
	description: Array;

	/**
	 * The name of the ExtensionHandler object that manages this data.
	 * Available after this set has been registered with app.registerInfoset().
	 */
	extension: string;

	/**
	 * The name of this set.
	 * Must be a valid JavaScript identifier. This becomes a property of the ExtensionModel object for the managing extension.
	 */
	infosetName: string;

	/**
	 * Adds a child node to the core data set children.
	 * Use this in the model's refreshInfoset() method to add any children of a handled container node.
	 * @param path The Bridge URI (path and file name) of the child node
	 * @param model An ExtensionModelobject that manages the new child. Can be undefined (the default).
	 * @param containerHint Whether the new child is a container. Either "container" or "notContainer" (the default). Ignored if model is provided; otherwise, controls which icon is used for the child.
	 */
	addChild(path: string, model?: ExtensionModel, containerHint?: string): void;

	/**
	 * Sets all members of this set to the default value for the data type.
	 * Default value are: String: "" (empty string), Boolean: false, Number: 0, SizeIn Bytes: 0
	 */
	initializeMembersToDefaultValues(): void;

}

/**
 * Associates a data type with a single node-data value for Adobe Bridge nodes.
 * Each node-data value is a member of anInfoset object associated with an ExtensionHandler object.
 * The name becomes a property of the parent Infoset object, which provides access to a data value of this type.
 */
declare class InfosetMemberDescription {
	/**
	 * The name of this value, which becomes a property of the parent Infoset object.
	 */
	name: string;

	/**
	 * The data type for values accessed through the name property of the parent Infoset object.
	 * One of: Boolean, String, Number, Icon (16x16), BitmapData (a BitmapData object), SizeInBytes, Date, Array (an array of type for any of these types: nested arrays are not allowed).
	 */
	type: string;

}

/**
 * Manages Bridge cache.
 * Adobe Bridge lets you export the cache to shared folders. The imported cache can be reused later using the same or different Bridge applications. Through this class, you can also choose to purge the local cache or cache for a specific location, with options to include all subfolders and shared cache for purging. The cache import should be performed only after the cache has been exported once.
 */
declare class ManageCache {
	/**
	 * Builds cache for a folder and all subfolders.
	 * Exports cache to the folder(s) itself. Returns true or false according to the operation completion status.
	 * @param path Platform path of the folder for which cache export needs to be done. Cache is exported for all subfolders in the specified path.
	 * @param buildFullPreviews Specifies whether you want to build and export full-size previews. The full-size previews may result in a slower export operation.
	 */
	buildAndExportSharedCache(path: string, buildFullPreviews?: boolean): boolean;

	/**
	 * Imports the already exported cache.
	 * The cache is imported for the selected folder and all subfolders, which avoids the need to build the new cache. Returns true or false according to the operation completion status.
	 * @param path Platform path of the folder for which cache export needs to be done. Cache is imported for all the subfolders in this path.
	 */
	importSharedCache(path: string): boolean;

	/**
	 * Purges all local (thumbnail) cache for all the folders.
	 */
	purgeAllLocalCache(): void;

	/**
	 * Purges all cache for input folder.
	 * You can choose to include all subfolders for purging. If the chosen path already has the exported cache, you can choose to delete the cache via this method.
	 * @param path Platform path of the folder for which cache export needs to be done.
	 * @param includeSubFolders Specifies if the cache is to be purged for all the subfolders on the selected path.
	 * @param purgeForAllUsers Specifies if the exported cache is to be purged for everyone.
	 */
	purgeCacheForLocation(path: string, includeSubFolders?: boolean, purgeForAllUsers?: boolean): void;

}

/**
 * Provides ways to edit the capture time of .jpeg and .raw files.
 * Adobe Bridge lets you edit the capture time of JPEG and CameraRaw files. You can edit or update the capture time of the selected file to a specific time, shift the capture time by a specified duration, or revert the updated capture time.
 */
declare class EditCaptureTime {
	/**
	 * Reverts the capture time of all selected files to the original capture time.
	 */
	revertToOriginalTime(): void;

	/**
	 * Sets the capture time of all files to a specified time.
	 * Returns true or false according to the operation completion status
	 * @param date Date to be set for the selected files. Valid values for date are from 1 to 31, depending upon the month and the year.
	 * @param month Month to be set for the selected files. Valid values for month are from 1 to 12.
	 * @param year Year to be set for the selected files. Year should be valid.
	 * @param hour Hour to be set for the selected files. Valid values for hour are from 1 to 24.
	 * @param minute Minute to be set for the selected files. Valid values for minute are from 1 to 60.
	 * @param second Second to be set for the selected files. Valid values for second are from 1 to 60.
	 */
	setToCorrectedTime(date: number, month: number, year: number, hour: number, minute: number, second: number): boolean;

	/**
	 * Shift capture time by set time.
	 * Shifts the capture time of all the selected files by the set amount of hours, minutes or seconds.
	 * @param sign Signifies whether you want to add or subtract the set time. Valid values for sign are + or - .
	 * @param Shiftedhour Shifts the capture time of the selected files by a specified number of hours. Valid values for hour are from 1 to 24.
	 * @param ShiftedMinute Shifts the capture time of the selected files by a specified number of minutes. Valid values for minute are from 1 to 60.
	 * @param ShiftedSecond Shifts the capture time of the selected files by a specified number of seconds. Valid values for second are from 1 to 60.
	 */
	shiftBySetTime(sign: string, Shiftedhour: number, ShiftedMinute?: number, ShiftedSecond?: number): boolean;

}

/**
 * Represents the application menu bar, menus and submenus, and individual items or commands.
 * Adobe Bridge creates MenuElement instances for each of the existing menu elements, and you can create additional instances to extend the existing menus.
 * A script can execute a menu command using app.document.chooseMenuItem().Existing menu elements that can be extended have predefined identifiers, listed in the Adobe Bridge JavaScript Reference. Not all existing menu elements can be extended. You can only add a new menu or command before or after an existing menu or command, which you must specify using the predefined unique identifier. Use the create() static function to create new menu items, rather than the new operator. This function behaves correctly if a menu item with the same name already exists.
 */
declare class MenuElement {
	/**
	 * When true, the Alt modifier key was pressed when the item was selected.
	 */
	altDown: boolean;

	/**
	 * Whether the menu item can be checked.
	 * When true, the menu item can be checked. Otherwise, the menu item cannot be checked.
	 */
	canBeChecked: boolean;

	/**
	 * Whether the item is checked.
	 * When true, the command is selected. A check mark appears next to the label. When false, the item is not selected, and no check mark is shown.
	 */
	checked: boolean;

	/**
	 * When true, the Command modifier key was pressed when the item was selected.
	 */
	cmdDown: boolean;

	/**
	 * When true, the Control modifier key was pressed when the item was selected.
	 */
	ctrlDown: boolean;

	/**
	 * Whether the menu or item is enabled.
	 * When true, the menu or command is selectable. When false, it is grayed out and cannot be selected. Read/write.
	 */
	enabled: boolean;

	/**
	 * A unique identifier for the element.
	 * Identifiers take the form: /app/menu/submenu/command. They are not localized, and are case sensitive. Predefined identifiers are listed in the Adobe Bridge JavaScript Reference.
	 */
	id: string;

	/**
	 * A string describing the location of the new menu element, with respect to existing menu elements.
	 * Set on creation; see create() method.
	 */
	location: string;

	/**
	 * When true, the Option modifier key was pressed when the item was selected.
	 */
	optionDown: boolean;

	/**
	 * Whether there is a separator after this item.
	 * Set on creation; see create() method.
	 */
	separatorAfter: boolean;

	/**
	 * Whether there is a separator before this item.
	 * Set on creation; see create() method.
	 */
	separatorBefore: boolean;

	/**
	 * When true, the Shift modifier key was pressed when the item was selected.
	 */
	shiftDown: boolean;

	/**
	 * The displayed label text, a localizable string.
	 */
	text: string;

	/**
	 * The type of menu element, a menu or command.
	 * Set on creation; see create() method.
	 */
	type: string;

	/**
	 * Adds a new menu to the menu bar, a new submenu to an existing menu, or a new command to an existing menu or submenu.
	 * Use this function to create new menu items, rather than the new operator. This function behaves correctly if a menu item with the same name already exists.
	 * @param type The type of menu element, a menu or command. Eithermenu, a menu or submenu, or command, a menu item.
	 * @param text The localizable string that is displayed as the label text. Script-created menu and menu commands cannot have keyboard shortcuts or icons.
	 * @param location A string describing the location of the new menu element, with respect to existing menu elements. This can take one of the following forms: before identifier: Create the new element before the given menu element. after identifier: Create the new element before the given menu element. at the end of identifier: Append the new element to the given menu. The identifier must be for a menu, not a command item. at the beginning of identifier: Create the new element as the first item in the given menu. The identifier must be for a menu, not a command item. To insert a separator before or after the new element, specify a dash (-) at the beginning or end of the location string. A string that does not conform to these rules causes a run-time error.
	 * @param id The unique identifier for this element. If the ID of an existing menu or submenu is supplied, the call returns that menu object. If the ID of an existing command is supplied, the call causes a JavaScript error. If not supplied, the call generates a numeric value, which can be found in the id property of the returned menu object.
	 */
	static create(type: string, text: string, location: string, id?: string): MenuElement;

	/**
	 * Retrieves a menu element object using its unique identifier.
	 * Returns the MenuElement object for the specified menu or menu item, or null if no such element is found.
	 * @param id The unique identifier for the menu element to find.
	 */
	static find(id: string): MenuElement;

	/**
	 * Removes a script-defined menu or menu item.
	 * @param id The unique identifier for the menu element to remove.
	 */
	static remove(id: string): void;

}

/**
 * Represents a reference to a node in the browser navigation hierarchy.
 * Thumbnail objects can represent:
 * Files and folders in the local file system.
 * URLs
 * Navigation nodes of types defined by a node-handling extension.
 * A thumbnail's applicable node handler determines how nodes are displayed when that thumbnail is selected. The Content pane can show thumbnail icons. CAUTION: When a script accesses the properties of a Thumbnail object, some properties of the object may not be immediately available. To ensure the object contains current data, set app.synchronousMode to true before accessing properties.
 */
declare class Thumbnail {
	/**
	 * If the value of type is alias, the kind of target this thumbnail represents.
	 * Either file or folder. If type is not alias, value is undefined.
	 */
	aliasType: string;

	/**
	 * The node children of this container node.
	 * An array of Thumbnail objects. When this object references a folder, the children are the thumbnails that reference the contents of the folder. By default, when the thumbnail is selected in a navigation pane, its children are shown in the Content pane.This array is not populated until the loaded event has occurred for the browser.The list of children is cached on the first reference so that subsequent references do not result in further disk access. To ensure that the list is up to date (for example after you have performed operations that may have resulted in children being deleted, added, or renamed) call the refresh() method to make sure the list is updated on the next access. You do not need to refresh if you changed the content or properties of a child thumbnail.
	 */
	children: Array;

	/**
	 * When true, the node is a container.
	 * A container can have child nodes (regardless of whether it currently has any children). Only container nodes can appear in the Folders and Favorites panes. Folder thumbnails are containers; a node-handling extension can define other container node types.
	 */
	container: boolean;

	/**
	 * Provides access to the core node-data sets defined by the default node handler.
	 * Refer to core node attributes through the name of the core Infoset object and InfosetMemberDescription object. For example, myThumbSize = myThumb.core.immediate.size
	 */
	core: Infoset;

	/**
	 * Date the referenced file or folder was created, if it can be determined.
	 */
	creationDate: Date;

	/**
	 * DEPRECATED. Do not use.
	 */
	displayMode: string;

	/**
	 * DEPRECATED. Do not use.
	 */
	displayPath: string;

	/**
	 * For a file or folder, whether the resource for this node exists on the local disk.
	 * A node-handling extension can define other criteria for whether a node exists.
	 */
	exists: boolean;

	/**
	 * All of the ExtensionHandler objects that could handle this node.
	 * The last one in the list is the one that does handle it.
	 */
	extensions: Array;

	/**
	 * Whether this thumbnail is associated with a file that contains embedded metadata.
	 */
	hasMetadata: boolean;

	/**
	 * Whether this thumbnail is displayable.
	 * When true, this thumbnail is hidden. When false (the default), it is shown.
	 */
	hidden: boolean;

	/**
	 * The path to the operating-system icon image file for this node, when it represents a web page.
	 */
	iconPath: string;

	/**
	 * The label string for this thumbnail.
	 * Can be one of the predefined color strings (as seen in the Label menu) to apply one of the standard colors. Any string that does not match a predefined color is considered a label string rather than a color. The default color is White. This label is displayed for all thumbnails, regardless of whether they support embedded metadata.
	 */
	label: string;

	/**
	 * Date the referenced file or folder was last modified, if it can be determined.
	 */
	lastModifiedDate: Date;

	/**
	 * Whether the thumbnail is associated with a local file-system object or a Version Cue node (which can have both a local and remote replica).
	 * One of: local, unknown, VersionCue
	 */
	location: string;

	/**
	 * Whether this node represents a read-only file in Windows, or a file that has been locked in the Finder in Mac OS.
	 */
	locked: boolean;

	/**
	 * The Metadata object associated with this thumbnail, if it supports embedded metadata.
	 * Some properties of this Metadata object may not be immediately available. To ensure the object contains current data, set app.synchronousMode to true, or useThumbnail.synchronousMetadata .If no metadata is defined for a thumbnail, and you attempt to access a metadata property through this property, the value undefined is returned. Note that this differs from the behavior in Adobe Bridge CS2, where an exception was thrown in this case.
	 */
	metadata: Metadata;

	/**
	 * The referenced file’s MIME type, if it can be determined.
	 * If the type cannot be determined, returns the empty string.
	 */
	mimeType: string;

	/**
	 * The ExtensionModel object associated with this node.
	 */
	model: ExtensionModel;

	/**
	 * The label displayed for the thumbnail.
	 * Default is the path value.
	 */
	name: string;

	/**
	 * The Thumbnail object for the parent node of this thumbnail.
	 * The value is undefined for thumbnails added to the root level of app.favorites. This object is in the children array of its parent.
	 */
	parent: Thumbnail;

	/**
	 * DEPRECATED. Use spec or uri instead.
	 */
	path: string;

	/**
	 * The rating value for this thumbnail.
	 * In the range [-1..5]. A negative value signifies a rejection. If set to a value that is out of range, the rating is set to 0. Applies to all thumbnails regardless of whether they support embedded metadata.
	 */
	rating: number;

	/**
	 * The angle of rotation for the icon image of this node, in degrees.
	 * One of: 0: No rotation, 90: Rotated 90 degrees clockwise, -90: Rotated 90 degrees counterclockwise, 180: Rotated 180 degrees. All other values are ignored.
	 */
	rotation: number;

	/**
	 * AFile or Folder object for this thumbnail’s referenced node.
	 * Set when the object is created, using the first argument to the Thumbnail object constructor. If the thumbnail does not reference a file or folder, the value is undefined.
	 */
	spec: File;

	/**
	 * Waits for confirmation of a valid value to return the Metadata object associated with this thumbnail, if any.
	 * If the node does not support embedded metadata, returns undefined. If app.synchronousMode is true, this is the same asThumbnail.metadata.
	 */
	synchronousMetadata: Metadata;

	/**
	 * The type of node this thumbnail references.
	 * One of: file, folder, alias, package, application (an executable file), other
	 */
	type: string;

	/**
	 * The full Bridge URI ( unique resource identifier) for this thumbnail.
	 * This is the path string preceded by a registered node-type identifying prefix such as "vc:".
	 */
	uri: string;

	/**
	 * DEPRECATED. Do not use.
	 */
	add(): void;

	/**
	 * Creates a new Thumbnail object that references the same node as this one.
	 * Adds the new thumbnail to the target thumbnail's children list. Each call to this function is added to the Undo stack.
	 * @param path The parent node of the new copy. A File or Folder object, a Thumbnail object, or a Bridge URI string.
	 */
	copyTo(path: object): boolean;

	/**
	 * Returns the position of playback slider from Preview panel.
	 * Returns the position of playback slider from Preview panel. This function returns an array of two numbers, which are nPosition and nTotal, as defined in the setPosition method.
	 */
	getPosition(): void;

	/**
	 * Returns the position of volume slider for the item being previewed in Bridge.
	 * Returns the position of volume slider for the item being previewed in Bridge. This function returns an array of two numbers, which are nPosition and nTotal, as defined in the setVolume method.
	 */
	getVolume(): void;

	/**
	 * DEPRECATED. Do not use.
	 */
	insert(): void;

	/**
	 * Returns true if the auto-loop is enabled in the Preview panel.
	 * Returns true if the auto-loop is enabled in the Preview panel. Returns false if the file is paused, thumbnail is not selected, or the selected item cannot be played.
	 */
	isAutoLoopOn(): void;

	/**
	 * Returns true if the Thumbnail object can be played in Bridge.
	 * Returns true if the Thumbnail object can be played in the Preview panel in Bridge, such as a video or an audio file. Returns false if the Thumbnail object cannot be played.
	 */
	isDynamicMedia(): void;

	/**
	 * Returns true if selected file is already playing in the Preview panel.
	 * Returns true if the selected file is already playing in the Preview panel. Returns false if the file is paused, a thumbnail is not selected, or the selected item cannot be played.
	 */
	isPlaying(): void;

	/**
	 * Changes the parent of this thumbnail.
	 * Removes this thumbnail from its current parent, and adds it to the target thumbnail’s children list.
	 * @param path The new parent node. A File or Folder object, a Thumbnail object, or a Bridge URI string.
	 */
	moveTo(path: object): boolean;

	/**
	 * Launches the file referenced by this thumbnail in the appropriate application (such as Photoshop for JPEG files).
	 * This is the same as choosing Open from the File or context menu, or double-clicking the thumbnail icon in the Content pane. If this thumbnail references a JSX file, runs the script in its target application, or, if no target is specified, in the ExtendScript Toolkit. If this thumbnail references a folder, navigates to that folder in the Folders pane—that is, sets Document.thumbnail to this thumbnail.Returns true on success.
	 */
	open(): boolean;

	/**
	 * Launches the file referenced by this thumbnail in the specified application.
	 * @param appPath A platform-specific path string to the application. A string as returned in the appPath property of the openWith event object when a user makes a selection of thumbnails in the Content pane, then selects an application from the Open With submenu of the File or context menu. Returns true on success.
	 */
	openWith(appPath: string): boolean;

	/**
	 * Refreshes an associated information set or sets to reflect the current state of this node’s referenced file or folder.
	 * For container thumbnails, marks the Thumbnail object so that the next access to the children property causes a disk access to update the cached list of children.
	 * For non-container thumbnails, returns true if the node has changed since the last access.
	 * For container thumbnails, returns true if the node has been renamed since the last access.
	 * Returns true on success.
	 * @param infosetName The data sets to refresh. An array of Infoset object names, or the string all (the default), which refreshes all information sets associated with this thumbnail.
	 */
	refresh(infosetName?: Array): boolean;

	/**
	 * Registers a callback function that is executed whenever a node-data value in this thumbnail changes.
	 * @param callback A developer-defined callback function. Must conform to the prototype function interestCallback (thumb, message) thumb is this Thumbnail object. message is a string, the name of the Infoset object whose update triggered the call.
	 */
	registerInterest(callback: void): void;

	/**
	 * Deletes this Thumbnail object.
	 * Also deletes the file or folder associated with the thumbnail from the disk.
	 */
	remove(): void;

	/**
	 * If the value of type is alias, retrieves a Thumbnail object for the target of the alias.
	 * If the alias can be resolved, returns the Thumbnail object for the target.
	 * If the alias cannot be resolved, returns undefined.
	 * If the type is not alias, returns this Thumbnail object.
	 */
	resolve(): Thumbnail;

	/**
	 * Opens the platform-specific native file browser, displays and selects the file or folder for this thumbnail.
	 */
	revealInSystemBrowser(): void;

	/**
	 * Sets seek position of playback slider in the Preview panel.
	 * Sets seek position of the playback slider in the Preview panel for the selected file. This function expects two numbers as arguments.
	 */
	setPosition(): void;

	/**
	 * Sets position of the volume slider in the Preview panel.
	 * Sets position of the volume slider in the Preview panel for the selected file. This function expects two numbers as arguments.
	 */
	setVolume(): void;

	/**
	 * Toggles the state of the Auto-Loop button in Preview panel for the selected item.
	 * Toggles the state of the Auto-Loop button in Preview panel for the selected item. This button is enabled when a playable item is selected in the Content panel.
	 */
	toggleAutoLoop(): void;

	/**
	 * Toggles the state of the Play or Pause button in Preview panel for the selected item.
	 * Toggles the state of the Play or Pause button in Preview panel for the selected item. This button is enabled when a playable item is selected in the Content panel.
	 */
	togglePlayPause(): void;

	/**
	 * Removes a callback function from the list of callbacks registered for this thumbnail.
	 * @param callback A developer-defined callback function, previously registered with registerInterest().
	 */
	unregisterInterest(callback: Function): void;

	/**
	 * Re-enumerates the children of a container node.
	 * Has no effect if the node is not a container.
	 */
	verifyExternalChanges(): void;

}

/**
 * Allows you to access the Extensible Metadata Platform (XMP) metadata associated with the file node of a Thumbnail object.
 * This is external data associated with the file, such a copyright owner, author, or camera settings.Access the Metadata object for a file-type thumbnail through Thumbnail.metadata . When a script needs to access the metadata through the Thumbnail object, it is important to make sure that the returned object contains the most current data. To ensure this, your script should set app.synchronousMode to true before attempting to retrieve values throughThumbnail.metadata , or else useThumbnail.synchronousMetadata . Keep in mind, however, that metadata access is a time-intensive operation. Do not do it unnecessarily, or as part of operations that occur very frequently, such as a MenuItem onDisplay callback function.The Metadata object does not support multi-valued properties.
 */
declare class Metadata {
	/**
	 * The current XMP namespace, used to search for XMP properties.
	 * Default is the root namespace. Assigning a new namespace creates that namespace in the XMP metadata. To access values in a specific schema, the namespace for that schema must be set before referencing the properties in the schema.
	 */
	namespace: string;

	/**
	 * Adds metadata properties to this object that were saved to an XMP template from the FileInfo dialog.
	 * @param templateName The name of the XMP template. Templates are stored for each user in: (Windows) %APPDATA%/Adobe/XMP/Metadata Templates/ (Mac OS) /Users/username/Library/Application Support/Adobe/XMP/ Metadata Templates/
	 * @param modType The modification type. One of: append: Adds to the metadata any property that is in the template but not in the source. If a property in the template already exists in the source, its value is not changed, unless it is an array. For an array, adds members that are in the template but not in the source. If an array member already exists in the source, the value is not changed. replace: Adds to the metadata all properties and values that are in the template. If a property in the template already exists in the source, its value is changed to the template value.
	 */
	applyMetadataTemplate(templateName: string, modType: string): void;

	/**
	 * Retrieves and returns the string value of a metadata property in the specified namespace.
	 * Returns the string value, or an empty string if the specified property does not exist.
	 * @param namespace The XMP namespace.
	 * @param property The property name. To access a multivalue (complex) property, use an XPath to the individual value.
	 */
	read(namespace: string, property: string): string;

	/**
	 * Serializes the XMP packet into a string.
	 * Returns the string containing the serialized metadata.
	 */
	serialize(): string;

}

/**
 * An independant node-handling operation with its own user interface.
 * See ProgressOperator for details of Operator objects.
 */
declare class ModalOperator {
	/**
	 * When true, the user has requested that the operation be canceled.
	 */
	cancelRequested: boolean;

	/**
	 * A string describing the current file-system conflict that prevents the operation from being performed.
	 * Can identify one of the preset Adobe Bridge error messages, or can be an arbitrary descriptive string. Preset messages are identified by the following string values: none, deleteFile, deleteMultipleFiles, deleteReadOnlyFile, moveReadOnlyFile, readOnlyFileExists, fileExists, fileIsBusy, targetFolderExists, fatalErrorSameFile, fatalErrorSameFolder, fatalErrorMoveToChild, fatalErrorSourceNotAvailable, fatalErrorStorageFull, fatalErrorSourceAccessDenied, fatalErrorTargetAccessDenied, fatalErrorUnknown, noXMPSupport, undoDelete, messageCustom
	 */
	conflictMessage: string;

	/**
	 * The type of the current file-system conflict encountered during the operation.
	 * One of: none, userConfirmationRequired, fatal
	 */
	conflictType: string;

	/**
	 * A description of the operation, suitable for display.
	 */
	description: string;

	/**
	 * When operationStatus is inError, the problematic thumbnail.
	 */
	errorTarget: Thumbnail;

	/**
	 * Implement a method that returns a description of a file-system conflict that prevents the operation from being performed on the current thumbnail.
	 * The string can identify one of the preset Adobe Bridge error messages, or can be an arbitrary descriptive string suitable for display in a conflict-resolution dialog. Preset messages are identified by the following string values: readOnlyFile, readOnlyFileExists, targetFolderExists, fileExists, sameFile, sameFolder, moveToChild, sourceNotAvailable, storageFull, sourceAccessDenied, targetAccessDenied, unknown
	 */
	getConflictInfo: Function;

	/**
	 * Implement a method that returns the percentage of the operation that has currently been completed, for use in displaying the Progress dialog.
	 * Adobe Bridge invokes this when it needs to update the Progress bar. Return a number in the range [0..100].
	 */
	getPercentageComplete: Function;

	/**
	 * Implement a method that returns the number of source nodes that have been processed so far.
	 * Return a number.
	 */
	getProcessedNodeCount: Function;

	/**
	 * Implement a method that returns the current overall status of the operation with respect to Adobe Bridge.
	 * Describes whether the operation has begun, is still going on, has been paused by the user, or has finished. Return one of the following string values: notStarted, inProgress, awaitingResume, completed
	 */
	getProcessingStatus: Function;

	/**
	 * Implement a method that returns a message suitable for display in the Progress dialog.
	 * Return a string.
	 */
	getProgressMessage: Function;

	/**
	 * Implement a method that returns the current number of bytes that have been transferred to the target in the course of this operation.
	 * Return a number.
	 */
	getTotalBytesTransferred: Function;

	/**
	 * Implement a method that returns the total number of source nodes to be operated on.
	 * Return a number.
	 */
	getTotalNodeCount: Function;

	/**
	 * Implement a method that returns the subclass type of this operator.
	 * Return a string, modal or progress.
	 */
	getType: Function;

	/**
	 * When sources has a value, an array of the same length containing the new name strings to be assigned to the source Thumbnail objects after they are transfered to the target.
	 */
	newNames: Array;

	/**
	 * The status of the operation with respect to the immediate action.
	 * Also returned by getOperationStatus(). One of: incomplete, inCancellation, inConflict, inError, succeeded, cancelled, failed
	 */
	operationStatus: string;

	/**
	 * How much of the operation has currently been completed, in the range [0..100].
	 */
	percentageComplete: number;

	/**
	 * The current overall status of the operation with respect to Adobe Bridge.
	 * Reports whether the operation has begun, is still going on, has been paused by the user, or has finished. Also returned by the getProcessingStatus(). One of: notStarted, inProgress, awaitingResume, completed
	 */
	processingStatus: string;

	/**
	 * A description of the current state of the operation, suitable for display.
	 * Also returned by getProgressMessage()..
	 */
	progressMessage: string;

	/**
	 * Implement a method that resolves a file-system conflict, as identified by the conflictType and conflictMessage values.
	 * Adobe Bridge invokes this after the user makes selections in a conflict-resolution dialog, passing in the user’s choices. See Adobe Bridge JavaScript Reference for additional details.
	 */
	resolveConflict: Function;

	/**
	 * How to resolve file-system conflicts.
	 * This is for the developer's information in a ModalOperator or when UI is suppressed; Adobe Bridge does not check it. One of: abort, noOverride, override, overrideConditionally
	 */
	resolveMethod: string;

	/**
	 * How to apply the conflict-resolution method, applyForOneConflictOnly or applyToAllConflicts
	 * This is for the developer's information in a ModalOperator or when UI is suppressed; Adobe Bridge does not check it.
	 */
	resolvePolicy: string;

	/**
	 * An optional result for an operation, such as the path that results from a createNewContainer() operation.
	 */
	result: object;

	/**
	 * Implement a method that restarts the operation after it has been stopped by user interaction.
	 * Return true if the operation has been successfully restarted.
	 */
	resume: Function;

	/**
	 * A set of Thumbnail objects that the operation acts upon.
	 */
	sources: Array;

	/**
	 * Implement a method that initiates the operation.
	 * Adobe Bridge invokes this after the operator has been enqueued.
	 * For a modal operator, the method should return when the operation is complete.
	 * For a progress operator, the method should begin the background task and return.
	 * Return undefined.
	 */
	start: Function;

	/**
	 * Implement a method that terminates the operation.
	 * Adobe Bridge invokes this after the operation has been stopped by user interaction. Return undefined.
	 */
	stop: Function;

	/**
	 * A target Thumbnail object for the operation.
	 */
	target: Thumbnail;

	/**
	 * A number of milliseconds to wait before aborting the operation.
	 * Default is 0, meaning that the operation does not time out.
	 */
	timeout: number;

}

/**
 * A lengthy node-handling operation that can report its progress and be interrupted or canceled.
 * When implementing a node-handling extension, you must define certain methods for a node-handler’s ExtensionHandler and ExtensionModel to create and return an Operator object, which actually implements the operation. The model method returns immediately. To start the operation, your node handler (or Adobe Bridge) passes the returned Operator object toapp.enqueueOperation(). This in turn calls thestart() method defined in the object.
 * This object encapsulates an operation that performs a background task, while Adobe Bridge displays a Progress bar. It can do so incrementally, periodically notifying Adobe Bridge of the current status. For this object, the start() method should spawn a thread to perform the operation and return immediately. Adobe Bridge displays a Progress bar, and resumes activity on the main thread. When the background thread updates the status in any way that affects the display, it must pass this object toapp.operationChanged(). Adobe Bridge queries this object in order to update the Progress dialog or display the Adobe Bridge-supplied error handling or resolution conflict dialogs.
 */
declare class ProgressOperator {
	/**
	 * When true, the user has requested that the operation be canceled.
	 */
	cancelRequested: boolean;

	/**
	 * A string describing the current file-system conflict that prevents the operation from being performed.
	 * Can identify one of the preset Adobe Bridge error messages, or can be an arbitrary descriptive string. Preset messages are identified by the following string values: none, deleteFile, deleteMultipleFiles, deleteReadOnlyFile, moveReadOnlyFile, readOnlyFileExists, fileExists, fileIsBusy, targetFolderExists, fatalErrorSameFile, fatalErrorSameFolder, fatalErrorMoveToChild, fatalErrorSourceNotAvailable, fatalErrorStorageFull, fatalErrorSourceAccessDenied, fatalErrorTargetAccessDenied, fatalErrorUnknown, noXMPSupport, undoDelete, messageCustom
	 */
	conflictMessage: string;

	/**
	 * The type of the current file-system conflict encountered during the operation.
	 * One of: none, userConfirmationRequired, fatal
	 */
	conflictType: string;

	/**
	 * A description of the operation, suitable for display.
	 */
	description: string;

	/**
	 * When operationStatus is inError, the problematic thumbnail.
	 */
	errorTarget: Thumbnail;

	/**
	 * Implement a method that returns a description of a file-system conflict that prevents the operation from being performed on the current thumbnail.
	 * The string can identify one of the preset Adobe Bridge error messages, or can be an arbitrary descriptive string suitable for display in a conflict-resolution dialog. Preset messages are identified by the following string values: readOnlyFile, readOnlyFileExists, targetFolderExists, fileExists, sameFile, sameFolder, moveToChild, sourceNotAvailable, storageFull, sourceAccessDenied, targetAccessDenied, unknown
	 */
	getConflictInfo: Function;

	/**
	 * Implement a method that returns the percentage of the operation that has currently been completed, for use in displaying the Progress dialog.
	 * Adobe Bridge invokes this when it needs to update the Progress bar. Return a number in the range [0..100].
	 */
	getPercentageComplete: Function;

	/**
	 * Implement a method that returns the number of source nodes that have been processed so far.
	 * Return a number.
	 */
	getProcessedNodeCount: Function;

	/**
	 * Implement a method that returns the current overall status of the operation with respect to Adobe Bridge.
	 * Describes whether the operation has begun, is still going on, has been paused by the user, or has finished. Return one of the following string values: notStarted, inProgress, awaitingResume, completed
	 */
	getProcessingStatus: Function;

	/**
	 * Implement a method that returns a message suitable for display in the Progress dialog.
	 * Return a string.
	 */
	getProgressMessage: Function;

	/**
	 * Implement a method that returns the current number of bytes that have been transferred to the target in the course of this operation.
	 * Return a number.
	 */
	getTotalBytesTransferred: Function;

	/**
	 * Implement a method that returns the total number of source nodes to be operated on.
	 * Return a number.
	 */
	getTotalNodeCount: Function;

	/**
	 * Implement a method that returns the subclass type of this operator.
	 * Return a string, modal or progress.
	 */
	getType: Function;

	/**
	 * When sources has a value, an array of the same length containing the new name strings to be assigned to the source Thumbnail objects after they are transfered to the target.
	 */
	newNames: Array;

	/**
	 * The status of the operation with respect to the immediate action.
	 * Also returned by getOperationStatus(). One of: incomplete, inCancellation, inConflict, inError, succeeded, cancelled, failed
	 */
	operationStatus: string;

	/**
	 * How much of the operation has currently been completed, in the range [0..100].
	 */
	percentageComplete: number;

	/**
	 * The current overall status of the operation with respect to Adobe Bridge.
	 * Reports whether the operation has begun, is still going on, has been paused by the user, or has finished. Also returned by the getProcessingStatus(). One of: notStarted, inProgress, awaitingResume, completed
	 */
	processingStatus: string;

	/**
	 * A description of the current state of the operation, suitable for display.
	 * Also returned by getProgressMessage()..
	 */
	progressMessage: string;

	/**
	 * Implement a method that resolves a file-system conflict, as identified by the conflictType and conflictMessage values.
	 * Adobe Bridge invokes this after the user makes selections in a conflict-resolution dialog, passing in the user’s choices. See Adobe Bridge JavaScript Reference for additional details.
	 */
	resolveConflict: Function;

	/**
	 * How to resolve file-system conflicts.
	 * This is for the developer's information in a ModalOperator or when UI is suppressed; Adobe Bridge does not check it. One of: abort, noOverride, override, overrideConditionally
	 */
	resolveMethod: string;

	/**
	 * How to apply the conflict-resolution method, applyForOneConflictOnly or applyToAllConflicts
	 * This is for the developer's information in a ModalOperator or when UI is suppressed; Adobe Bridge does not check it.
	 */
	resolvePolicy: string;

	/**
	 * An optional result for an operation, such as the path that results from a createNewContainer() operation.
	 */
	result: object;

	/**
	 * Implement a method that restarts the operation after it has been stopped by user interaction.
	 * Return true if the operation has been successfully restarted.
	 */
	resume: Function;

	/**
	 * A set of Thumbnail objects that the operation acts upon.
	 */
	sources: Array;

	/**
	 * Implement a method that initiates the operation.
	 * Adobe Bridge invokes this after the operator has been enqueued.
	 * For a modal operator, the method should return when the operation is complete.
	 * For a progress operator, the method should begin the background task and return.
	 * Return undefined.
	 */
	start: Function;

	/**
	 * Implement a method that terminates the operation.
	 * Adobe Bridge invokes this after the operation has been stopped by user interaction. Return undefined.
	 */
	stop: Function;

	/**
	 * A target Thumbnail object for the operation.
	 */
	target: Thumbnail;

	/**
	 * A number of milliseconds to wait before aborting the operation.
	 * Default is 0, meaning that the operation does not time out.
	 */
	timeout: number;

}

/**
 * Represents a member subpanel of an InspectorPanel object that displays textual information about a set of thumbnails.
 * It differs from the ThumbnailPanelette object in that it does not display the thumbnail icon, only the related text.
 * The text can be static, or can be obtained dynamically from the associated thumbnail at display time, using panelette markup syntax.
 */
declare class TextPanelette {
	/**
	 * A set of two-element arrays in the format [key, value].
	 * The array corresponds to the thumbnails array, each pair describing the text for the corresponding thumbnail.The key is shown on the left of each field in bold, and the value on the right in plain text.The fields contains string literals combined with panelette markup elements, which specify the text to be displayed.
	 */
	keyValuePairs: Array;

	/**
	 * The unique, identifying name of this subpanel.
	 */
	name: string;

	/**
	 * The nodes corresponding to the key-value pairs.
	 * An array of Thumbnail objects or node URI strings for which to display descriptive text; or the special markup [[this]] to indicate the currently selected thumbnail in the Content pane.
	 */
	thumbnails: Array;

	/**
	 * Localizable text shown in the subpanel header bar.
	 * Can include panelette markup elements. If not supplied, the name string appears as theheader.
	 */
	titleMarkup: string;

}

/**
 * Represents a member subpanel of an InspectorPanel object that displays resizeable thumbnail icons, with corresponding text labels for each thumbnail.
 * The text can be specified with literal strings, derived from data in various ways, or calculated using JavaScript, using panelette markup syntax.The displayed thumbnails are mouse-sensitive. A single click makes a thumbnail the inspection focus for the Inspector, and reveals or navigates to that thumbnail in the Content pane.
 */
declare class ThumbnailPanelette {
	/**
	 * A set of two-element arrays in the format [key, value].
	 * The array corresponds to the thumbnails array, each pair describing the text for the corresponding thumbnail.The key is shown on the left of each field in bold, and the value on the right in plain text.The fields contains string literals combined with panelette markup elements, which specify the text to be displayed.
	 */
	keyValuePairs: Array;

	/**
	 * The unique, identifying name of this subpanel.
	 */
	name: string;

	/**
	 * The placement of the displayed text in the horizontal presentation mode.
	 * One of:
	 * below: (Default) Displays text below the thumbnail icon.
	 * right: Displays text to the right of the thumbnail icon.
	 */
	textPosition: string;

	/**
	 * The nodes corresponding to the key-value pairs.
	 * An array of Thumbnail objects or node URI strings for which to display descriptive text; or the special markup [[this]] to indicate the currently selected thumbnail in the Content pane.
	 */
	thumbnails: Array;

	/**
	 * Localizable text shown in the subpanel header bar.
	 * Can include panelette markup elements. If not supplied, the name string appears as theheader.
	 */
	titleMarkup: string;

}

/**
 * Represents a member subpanel of an InspectorPanel object that displays two columns for an icon and text.
 * The text can be static, or can be obtained dynamically from the associated thumbnail at display time, using panelette markup syntax.
 */
declare class IconListPanelette {
	/**
	 * The unique, identifying name of this subpanel.
	 */
	name: string;

	/**
	 * A collection of two-member arrays describing the rows to display in the panelette.
	 * Each member of the member arrays corresponds to a column.
	 * The first member of each member array specifies the icon displayed in the first column, as a Thumbnail Object or a 16x16 pixel JPG, PNG, or system icon.
	 * The second member, displayed in the second column, is a string that can contain markup elements to access dynamic data.
	 */
	rows: Array;

	/**
	 * Localizable text shown in the subpanel header bar.
	 * Can include panelette markup elements. If not supplied, the name string appears as theheader.
	 */
	titleMarkup: string;

}

/**
 * Represents an object-inspection panel, a special type of tabbed palette that displays contextual information for a selected thumbnail.
 * Your script defines what kind of related information to display, and how to display it. The panel serves as a frame and parent for subpanels that actually display the information. Subpanels are represented by members of the Panelette Base Class contained in this parent panel.
 * Register a inspection panel that you create to make it available to Adobe Bridge, using app.registerInspectorPanel().
 * To turn the display of registered inspection panels on or off in a particular browser window, set Document.displayInspectorView.
 */
declare class InspectorPanel {
	/**
	 * Whether to display this panel.
	 * When true, this panel is displayed when Document.displayInspectorView is true, and if thescript-defined callback hidePanelForThumbnail returns true or is not implemented for this panel.When false, this panel is never displayed, and is also hidden in the Inspector page of the Preferences dialog.
	 */
	displayInInspector: boolean;

	/**
	 * The localized title string to display in the panel's tab header.
	 * The string can include values derived dynamically at display time, using panelette markup elements.Supplying this value allows you to use the same panel object with different titles for different node types. If this value is not supplied, the title value is displayed.
	 */
	displayTitle: string;

	/**
	 * The unique menu identifier of a script-defined flyout menu for this panel.
	 */
	flyoutMenuId: string;

	/**
	 * When true, the panel is minimized or iconified.
	 */
	minimized: boolean;

	/**
	 * A collection of panelettes contained in this panel, in display order.
	 * Use registerPanelette() and unregisterPanelette() to manage the list. Contains instances of the type-specific panelette subclasses:IconListPanelette, TextPanelette, ThumbnailPanelette.
	 */
	panelettes: Array;

	/**
	 * The preferred default position of this tabbed panel in the Inspector, relative to other panels.
	 * In the range [1..100]. Panels with lower values are above and to the left.
	 */
	sortPosition: number;

	/**
	 * The title text of this panel, displayed in the tab header.
	 * See also displayTitle.
	 */
	title: string;

	/**
	 * When true, the majority of this panel is visible on the screen.
	 * When false, the panel is minimized or iconified, or most of it is positioned off the screen.
	 */
	visible: boolean;

	/**
	 * When true, this panel occupies the entire available horizontal space.
	 * When false, the default, the panel occupies one third of available space.
	 */
	wide: boolean;

	/**
	 * Registers a script-defined panelette as a member of this panel, adding it to panelettes list.
	 * Returns true on success, false if the panelette is already registered or the operation fails.
	 * @param panelette The panelette object. One of the type-specific panelette subclasses:IconListPanelette, TextPanelette, ThumbnailPanelette.
	 */
	registerPanelette(panelette: object): boolean;

	/**
	 * Removes a member panelette from this panel.
	 * @param panelette The panelette object.
	 */
	unregisterPanelette(panelette: object): void;

}

/**
 * Allows access to the Adobe Bridge application preferences.
 * The preference properties listed here are the static properties. Additional dynamic properties reflect the prefereences that can be viewed in and controlled by Preferences dialog. Some existing preferences can be set or read by setting or retrieving the associated property value. Not all existing preferences are available in the scripting environment. Those that are available are listed in the Adobe Bridge JavaScript Reference. Preference values do not take effect until Adobe Bridge application is restarted.
 * You can set certain preference values for the current session only. That is, the changes take effect immediately, but do not persist across sessions. The next time the Adobe Bridge application is restarted, the global preference value is used.
 * A script can create a new preference by simply referencing a new property name in this object. New preferences must be of the type String, Number, or Boolean. Composite types (such as Rect and Point) are retrieved as String objects.
 * Access the Preferences object through the app.preferences property.
 */
declare class Preferences {
	/**
	 * In the General page of the Preferences dialog, the preference associated with the AccentColor menu.
	 * One of: System, Crystal, Obsidian, Sapphire, Lapis Lazuli, Amber, Ruby, Emerald.
	 */
	AccentColor: string;

	/**
	 * In the Cache page of the Preferences dialog, the preference associated with Cache choices.
	 * True when Automatically Export Caches to Folders When Possible is selected. Default false.
	 */
	AutoExportCaches: boolean;

	/**
	 * In the Cache page of the Preferences dialog, the preference associated with the Cache Location.
	 * The location of the centralized cache. A folder path, specified as a string or ExtendScript Folder object.
	 */
	CacheDirectory: string;

	/**
	 * In the General page of the Preferences dialog, the preference associated with Favorite Items choices.
	 * A collection of Bridge URI strings for checked nodes, which are displayed in the Favorites palette.
	 */
	Favorites: Array;

	/**
	 * A collection of localized display names for the nodes displayed in the Favorites palette.
	 * Each member corresponds to URI member of the Favorites array.
	 */
	FavoritesDisplayNames: Array;

	/**
	 * In the Thumbnails page of the Preferences dialog, the preference associated with "Do not process files larger than: nnn MB".
	 * Default 1000.
	 */
	FileSize: number;

	/**
	 * In the Metadata page of the Preferences dialog, the preference associated with the "Hide Empty Fields" checkbox.
	 * True when checked. Default true.
	 */
	HideEmptyFields: boolean;

	/**
	 * In the File Type Associations page of the Preferences dialog, the preference associated with the "Hide Undefined File Associations" checkbox.
	 * True when checked. Default false.
	 */
	HideUnknownOpeners: boolean;

	/**
	 * In the General page of the Preferences dialog, the preference associated with the "Image Backdrop" slide bar.
	 * Sets background of the Content pane.The background color is set in the range of 0 - 255, where 0 is black, and 255 is white. Default 186.
	 */
	ImageBackdrop: number;

	/**
	 * In the Advanced page of the Preferences dialog, the preference associated with Keyboard.
	 * Takes effect on restart.
	 */
	Keyboard: string;

	/**
	 * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
	 * These preferences control the choices that appear in the Label menu in the menu bar and in the right-click context menu for image thumbnails.
	 */
	Label1: string;

	/**
	 * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
	 * These preferences control the choices that appear in the Label menu in the menu bar and in the right-click context menu for image thumbnails.
	 */
	Label2: string;

	/**
	 * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
	 * These preferences control the choices that appear in the Label menu in the menu bar and in the right-click context menu for image thumbnails.
	 */
	Label3: string;

	/**
	 * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
	 * These preferences control the choices that appear in the Label menu in the menu bar and in the right-click context menu for image thumbnails.
	 */
	Label4: string;

	/**
	 * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
	 * These preferences control the choices that appear in the Label menu in the menu bar and in the right-click context menu for image thumbnails.
	 */
	Label5: string;

	/**
	 * In the Labels page of the Preferences dialog, the preference associated with the "Require the Control Key to Apply Labels and Ratings" checkbox.
	 * True when checked. Default true.
	 */
	LabelCtrlKey: boolean;

	/**
	 * In the Advanced page of the Preferences dialog, the preference associated with Language.
	 */
	Language: string;

	/**
	 * In the General page of the Preferences dialog, the preference associated with "Number of Recent Items to Display".
	 */
	MRUCount: number;

	/**
	 * The set of absolute path strings for recently-visited folders, displayed when the MRUCount is greater than 0.
	 */
	MRUFolders: Array;

	/**
	 * In the Startup Scripts the Preferences dialog, the script names associated with selected script checkboxes.
	 * This is the set of scripts that load automatically on startup.
	 */
	PermittedStartupScripts: Array;

	/**
	 * In the General page of the Preferences dialog, the preference associated with the "Double-Click Edits Camera Raw Settings in Bridge" checkbox.
	 * True when checked. Default false.
	 */
	ShowCameraRawInterface: boolean;

	/**
	 * In the Metadata page of the Preferences dialog, the preference associated with the "Show Metadata Placard" checkbox.
	 * True when checked. Default is true.
	 */
	ShowPlacard: boolean;

	/**
	 * In the Thumbnails page of the Preferences dialog, the preference associated with "Show Tooltips".
	 * True when checked. Default is false.
	 */
	ShowTooltips: boolean;

	/**
	 * In the Playback page of the Preferences dialog, the preference associated with "Stack Playback Frame Rate".
	 * One of: 2, 4, 6, 10, 12, 15, 24, 25, 30, 50, 60.
	 */
	StackFrameRate: number;

	/**
	 * In the Startup Scripts the Preferences dialog, setting to true is the equivalent of clicking Enable All, setting to false is the equivalent of clicking Disable All.
	 */
	StartupScriptsShouldLoad: boolean;

	/**
	 * The quality of thumbnail image to generate.
	 * One of: Draft: Quick Thumbnails, Proof: High Quality Thumbnails, DraftToProof: Convert To Hight Quality When Previewed
	 */
	ThumbnailQuality: string;

	/**
	 * In the General page of the Preferences dialog, the preference associated with the "User Interface Brightness" slide bar.
	 * Sets background of all parts of the browser window except the Content pane. The background color is set in the range of [0..255], where 0 is black, and 255 is white.
	 */
	UIBrightness: number;

	/**
	 * In the Advanced page of the Preferences dialog, the preference associated with the "Use Software Rendering" checkbox.
	 * True when checked. Takes effect on restart. When true, hardware acceleration is disabled for the Preview panel and slideshows. Default is false.
	 */
	UseSoftwareRendering: boolean;

	/**
	 * A set of metadata properties to be displayed beneath a thumbnail icon.
	 * Sets this style for a specific Content pane view. Does not change the related global preference, and the changes do not persist beyond the current view.
	 * An array of up to four string values; the first value in the array sets the first line of additional metadata, the second value sets the second line, and so on. An array value of undefined turns off the display of metadata for that line. Allowed values are: author, bit-depth, color-mode, color-profile, copyright, date-created, date-modified, description, dimensions, document-creator, document-kind, exposure, file-size, focal-length, keywords, label, opening-application
	 */
	extraMetadata: Array;

	/**
	 * Whether to show thumbnail name beneath thumbnail icons.
	 * Sets this style for a specific Content pane view. Does not change the related global preference, and the changes do not persist beyond the current view.
	 * When true, the names of thumbnails are displayed beneath the icon in this view. When false, they are not. (This is overridden by the document.showThumbnailName value.)
	 */
	showName: boolean;

	/**
	 * Removes script-created keys and values from the Adobe Bridge preferences, or resets preferences.
	 * If one or more preference names is passed, each is removed. If you try to access the property for a preference that has been removed, the property returns undefined.If no preference names are passed, removes all script-defined preferences, and resets all Adobe Bridge application preferences to their default values.
	 * @param name One or more names of preferences to remove.
	 */
	clear(name?: void): void;

	/**
	 * Resets file type associations to their default values.
	 * Corresponds to the "Reset to Default Associatetions" button in the File Type Associations page of the Preferences dialog.
	 */
	resetFileAssociations(): void;

	/**
	 * Resets "Do not show again" settings to false for all warning dialogs.
	 * Corresponds to the Reset button in the General page of the Preferences dialog.
	 */
	resetWarningDialogs(): void;

}

/**
 * Provides access to the Adobe Bridge Preferences dialog, allowing you to add a panel to the dialog with your own ScriptUI controls that access and set any application preferences that you have defined by adding properties to the Preferences Object.
 * You can only access this object as the target of an event. The object is returned in the object property of an Event Object that results from an event in a Preferences dialog. See PreferencesDialog events.
 * The Preferences dialog is modal, which means that no other Adobe Bridge events can occur until the user dismisses it with the OK or Cancel button, or closes it with the window-frame icon.
 * For the OK button, the dialog generates an ok event. Your handler can collect the values from the controls in your panel, and modify the property values in the Preferences object accordingly.
 * For the Cancel button, the dialog generates a cancel event, and for the window-close gesture, it generates a destroy event. Your handler can, for example, clean up structures you created for the window.
 * The class defines no properties.
 */
declare class PreferencesDialog {
	/**
	 * Creates and returns a ScriptUI Window object to be used as a new page in the Preferences dialog.
	 * You can add ScriptUI controls to the window to allow users to access and set preferences that you provide. Returns the new Window object.
	 * @param name The name of the new page, used as the title of the new Window object.
	 */
	addPanel(name: string): void;

	/**
	 * Closes the Preferences dialog.
	 * Returns undefined.
	 * @param isOK Pass true to simulate the user clicking OK to close the dialog, false for Cancel.
	 */
	close(isOK: boolean): void;

}

/**
 * Represents the navigation nodes that appear in the Favorites pane in the Adobe Bridge browser.
 * The Favorites object is itself an array of Thumbnail objects. Use Favorites.length to get the size of the array. While the Folders pane shows the full navigation hierarchy, with all folders and subfolders that Adobe Bridge can access, the Favorites pane shows only certain top-level folders and one level of subfolders. Subfolders in the Favorites pane can be, but are not necessarily, children of the Thumbnail for the parent node.Access the Favorites object through app.favorites.
 */
declare class Favorites {
	/**
	 * Sets the section of the Favorites pane for the next node operations in the immediate scope.
	 * One of:
	 * standard (default): The top section of the Favorites pane containing predefined nodes.
	 * user: The bottom section of the Favorites pane containing user-selected nodes.
	 */
	section: string;

	/**
	 * Appends a new node into the current section of the favorites array.
	 * Updates the Favorites pane to show the new node at the root level.Returns true on success. If the referenced node is already in the array, returns false and does not change the array.
	 * @param thumbnail The Thumbnail object for the node to add.
	 */
	add(thumbnail: Thumbnail): boolean;

	/**
	 * Inserts a new node into favorites.
	 * Inserts a new subnode into the current section of the favorites array, and updates the Favorites pane to show the new node below its parent when the parent is selected. Returns true on success. If the specified parent node is not in favorites array, returns false and does not add the subnode.
	 * @param parent The Thumbnail object for the parent node. Must be a root node in the favorites array.
	 * @param child The Thumbnail object for the new subnode. This node can be, but does not need not to be a child of the parent Thumbnail. It is not added to the parent’s children array.
	 */
	addChild(parent: Thumbnail, child: Thumbnail): boolean;

	/**
	 * Associates a named workspace with a thumbnail in the standard section of the Favorites pane.
	 * When the user clicks this thumbnail, this workspace becomes current.Returns true on success. If the thumbnail is in the user section, or is not in the Favorites pane, returns false and does nothing.
	 * @param thumb The Thumbnail object.
	 * @param workspace The workspace name. SeeDocument.workspace.
	 */
	associateWorkspace(thumb: Thumbnail, workspace: string): boolean;

	/**
	 * Deletes all the nodes from the current section of the favorites array and updates the Favorites pane.
	 */
	clearAll(): void;

	/**
	 * Reports whether the list of favorites currently contains a specific node, either in the standard or user sections.
	 * Returns true if the node is in the current favorites list, false otherwise.
	 * @param uri The Bridge URI string for the node.
	 */
	contains(uri: string): boolean;

	/**
	 * Disables a node from the standard section.
	 * Removes the node from display in the browser, but leaves it as an unchecked option in the General page of the Preferences dialog.
	 * @param uri The Bridge URI string for the node.
	 */
	disable(uri: string): void;

	/**
	 * Enables a node from the standard section.
	 * Displays the node in the browser, and checks the corresponding option in the General page of the Preferences dialog.
	 * @param uri The Bridge URI string for the node.
	 */
	enable(uri: string): void;

	/**
	 * Retrieves the children of a node in the Standard section of the Favorites pane.
	 * The node can be in either the enabled or disabled state. Returns an array of URI strings for the child nodes, or undefined if the node is not in the Standard section or not in the Favorites pane.
	 * @param uri The Bridge URI string for the node.
	 */
	getChildren(uri: string): Array;

	/**
	 * Inserts a new node into the current section of the favorites array.
	 * Updates the Favorites pane to show the new node at the root level.Returns true on success. If the referenced node is already in the array, returns false and does not change the array.
	 * @param thumbnail The Thumbnail object for the node to add.
	 * @param index A 0-based index into the existing node array at which to insert the new node, or an object reference for a node in the existing node array. The node is inserted before this existing node. If the value is beyond the end, is not in the existing node array, or is not supplied, the new node is appended to the end of the array.
	 */
	insert(thumbnail: Thumbnail, index?: void): boolean;

	/**
	 * Removes the specified script-defined node from the favorites array and updates the Favorites pane.
	 * Scripts cannot access predefined nodes.
	 * @param thumbnail The Thumbnail object for the node to remove.
	 */
	remove(thumbnail: Thumbnail): boolean;

}

/**
 * Defines one possible search criterion for a search among handled nodes.
 * Passed to Adobe Bridge to populate the Find dialog. Encapsulates one search criterion for a search among handled nodes. Your node handler can define possible search criteria for your nodes by creating these objects and passing them to Adobe Bridge in a SearchDefinition object, during the call to the node's ExtensionModel.getSearchDefinition() method.
 * Each object corresponds to one line in the Criteria box of the Find dialog.
 * The left side is a property associated with possible matching nodes, called the search field
 * The middle value is the comparison operator
 * The right side is the comparison value, or operand (some operators, such as "exists", do not require an operand)
 * For each node in the scope, a search that uses a selected criterion matches the selected search-field value against the operand using the selected comparison operator. This object specifies the left and right sides. By default, all of the predefined operators are displayed for user selection. You can use this object to limit which of these operators are available for selection.
 * The user's choices in the dialog are returned to Adobe Bridge in a set of a SearchCondition objects contained in a SearchSpecification object.
 */
declare class SearchCriteria {
	/**
	 * The data type of the operand values.
	 * Determines the description that appears in the operand field in the absence of a closed list of operands. The description is the expected format for Date values, otherwise generally "Enter text". One of: String, Number, Float, Date, Boolean
	 */
	operandType: string;

	/**
	 * One or more Operand objects used to populate the drop-down list for the right-side field of this line in the Find dialog.
	 * This allows you to specify a closed list of possible values to match against in the search field.
	 */
	operands: Array;

	/**
	 * A set of predefined operator strings that are not displayed for selection.
	 * An array of strings. Predefined operators are: exists, doesNotExist, equals, doesNotEqual, less, lessThanOrEqual, greater, greaterThanOrEqual, contains, doesNotContain, startsWith, endsWith
	 */
	operatorTypesToDisable: Array;

	/**
	 * A search field, the name of some property associated with the search node.
	 * Typically a metadata property or a member of an Infoset associated with handled nodes. The value of the selected search field is compared to the selected operand, using the selected comparison operator.
	 */
	searchField: string;

	/**
	 * A localized display name for the search field, displayed in the Find dialog. .
	 * Default is the searchField value
	 */
	searchFieldDisplay: string;

	/**
	 * Whether searchfield display names are sorted alphabetically in the Find dialog.
	 * When true, search field display names are sorted alphabetically. Default is false.
	 */
	searchFieldSort: boolean;

}

/**
 * Defines a set of search criteria for a search amond handled nodes.
 * Passed to Adobe Bridge to populate the Find dialog. Provides a way for Adobe Bridge extensions to specify how the Adobe Bridge Find dialog should be populated for a search among handled nodes. It specifies possible search criteria, and result scope and ranking criteria.
 * If the user invokes the Find dialog for a handled node, the dialog calls the the node's ExtensionModel.getSearchDefinition() method. Your node-handling extension must define this method to return a SearchDefinition object that can be used to populate Find dialog.
 * When a user clicks Find in the Find dialog, Adobe Bridge uses the dialog selections to create a SearchSpecification object, which, together with a target node, specifies a search.
 */
declare class SearchDefinition {
	/**
	 * A collection of possible SearchCriteria objects to use for this search.
	 * Used to populate the Criteria box in the Find dialog.
	 */
	criteriaList: Array;

	/**
	 * If non-zero, the Find dialog offers choices to limit the result set to certain sizes, and the choice defaults to this value.
	 */
	defaultResultsLimit: number;

	/**
	 * 
	 */
	quickSearchMenuItems: Array;

	/**
	 * A set of Rank objects to use only if the search can limit results.
	 */
	ranks: Array;

	/**
	 * A set of scopes used to extend or limit the scope of the search.
	 * One or more Scope objects. The Results box of the Find dialog displays a check box for each scope modifier.
	 */
	scopeSpecifiers: Array;

}

/**
 * Utility class for searches in handled nodes.
 * Encapsulates information about how a search result node was generated by a node-handler’s getBridgeUriForSearch() method. Returned by the ExtensionModel.getSearchDetails() method for a search-result node.
 */
declare class SearchDetails {
	/**
	 * A SearchSpecification object that was used to generate this search result.
	 */
	searchSpecification: SearchSpecification;

	/**
	 * The Bridge URI for the search target node that was used to generate this search result.
	 */
	searchTargetUri: string;

}

/**
 * Defines a specific condition that must be met for a handled node to match a search.
 * The Find dialog returns a SearchSpecification object for a specific search, which contains a list of these objects in the conditionList property; each object corresponds to the user's selection in one line of the Criteria box in the dialog. The SearchSpecification.conjunction controls whether all or any of the conditions must be met.
 * Your node handler can define possible search criteria for your nodes by creating SearchCriteria objects.
 * Each condition specifies a property associated with a node (the searchField), whose value is compared to a selected operand value, using a selected operator such as "equals". Operators are predefined. Some operators, such as "exists", do not require an operand.
 */
declare class SearchCondition {
	/**
	 * The value to compare against the value of the search field in each node.
	 * This corresponds to the right side of a line in the Criteria box of the Find dialog.
	 */
	operand: string;

	/**
	 * The comparison operator for the search.
	 * This corresponds to the middle field of a line in the Criteria box of the Find dialog. One of: exists , doesNotExist, equals, notEquals, less, lessThanOrEqual, greater, greaterThanOrEqual, contains, doesNotContain, startsWith, endsWith
	 */
	operatorType: string;

	/**
	 * The name of some property associated with the search node.
	 * Typically a metadata property or a member of an Infoset object associated with handled nodes. This corresponds to the left side of a line in the Criteria box of the Find dialog. Read/write.
	 */
	searchField: string;

}

/**
 * Defines a specific search among handled nodes.
 * Returned from a selection in the Find dialog. Encapsulates a specific search among member nodes of a target container node. The object contains a set of conditions to be met in order for a node to match, and instructions for how to return matching nodes.Adobe Bridge creates this object from user selections in the Find dialog. For a search that involves handled nodes, Adobe Bridge passes the search specification to the handler's getBridgeUriForSearch() method.
 */
declare class SearchSpecification {
	/**
	 * A collection of SearchCondition objects to use for this search.
	 * Each object specifies a search field, which identifies a property associated with a node, a comparison operator, such as "exists" or "equals", and an operand, the value to compare with the search field value (if the operator requires a comparison value).
	 */
	conditionList: Array;

	/**
	 * The search conjunction, and or or, as selected in the Find dialog.
	 * When it is and, all conditions must succeed for a node to match. When it is or, the success of any condition results in a match.
	 */
	conjunction: string;

	/**
	 * The maximum number of result nodes to return from the search.
	 * The search halts after this number of matches are found.
	 */
	maximumResults: number;

	/**
	 * 
	 */
	quickSearchItem: string;

	/**
	 * 
	 */
	quickSearchValue: string;

	/**
	 * The name of a Rank object, as specified for a SearchDefinition object.
	 * If the number of results are limited, results are sorted on the named attribute value, and the maximum number of result nodes with the highest rank values are returned.
	 * The returned results are again sorted by the view's sorting criteria upon display.
	 */
	rankField: string;

	/**
	 * The ordering style, one of ascending (the default) or descending.
	 */
	rankOrdering: string;

	/**
	 * One or more Scope object name strings, as specified for a SearchDefinition object.
	 * Each scope modifier can expand or limit the original scope defined by the target node. The scope value and usage is defined entirely by your ExtensionModel.getSearchDefinition() method implementation.
	 */
	scopeSpecifiers: Array;

}

/**
 * A helper object for node searches.
 * An array of these objects is kept in SearchCriteria.operands. They are used to populate the right-side field in the line that corresponds to the criterion in the Find dialog (values to be compared against). If there is more than one, the field displays a drop-down list.
 */
declare class Operand {
	/**
	 * The localized display name for the corresponding field in the Find dialog.
	 * If not supplied, the valueName is used.
	 */
	displayName: string;

	/**
	 * The operand value.
	 * A possible value of SearchCriteria.searchField.
	 */
	valueName: string;

}

/**
 * A helper object for node searches.
 * A SearchDefinition object can limit the number of results to return, and, if results are limited, it can define a set of possible properties to use in ranking results. Adobe Bridge sorts result nodes by the value of the chosen rank property, and returns no more than the maximum number of result nodes with the highest rank values. When the result is displayed, the view sorts the nodes again using its sorting criteria.The attribute name and display name of a property used for ranking are encapsulated in a Rank object.An array of these objects kept in SearchDefinition.ranks. They are used to populate the Rank field that corresponds to the definition in the Find dialog. If there is more than one, the field displays a drop-down list. The rank that the user selects becomes the SearchSpecification.rankField value.
 */
declare class Rank {
	/**
	 * The localized display name for the corresponding field in the Find dialog.
	 * If not supplied, the valueName is used.
	 */
	displayName: string;

	/**
	 * The property name for the ranking property.
	 */
	valueName: string;

}

/**
 * A helper object for node searches.
 * Identifies a scope modifier to use in node searches among handled nodes. The modifier can expand or limit the scope of the search from the original target node. The scope value and usage is defined entirely by the node's ExtensionModel.getSearchDefinition() implementation.An array of these objects, kept in SearchDefinition.scopeSpecifiers, is used to populate the Find dialog. The box displays a check box for each possible scope extension or limitation. When the user selects a scope, its name becomes the resulting SearchSpecification.scopeSpecifiers value.
 */
declare class Scope {
	/**
	 * The localized display name for the corresponding field in the Find dialog.
	 * If not supplied, the valueName is used.
	 */
	displayName: string;

	/**
	 * The unique identifying name for the scope modifier.
	 */
	valueName: string;

}

/**
 * 
 */
declare class QuickSearchItem {
	/**
	 * 
	 */
	displayName: string;

	/**
	 * 
	 */
	valueName: string;

}

/**
 * Provides a way for Adobe Bridge extensions to specify how handled nodes can be sorted.
 * Sorting compares the values of a property associated with the displayed nodes. This object identifies that property, which can be in handler-defined node data (that is, defined in an Infoset object), or defined in embedded XMP metadata.When Adobe Bridge enters a container node, it calls the node's ExtensionModel.getSortCriteria() method, which returns a list of these objects. The method can supply a completely new list, or can get the default list fromapp.defaultSortCriteria and modify it, append to it, or return it unchanged.
 */
declare class SortCriterion {
	/**
	 * A localized display name for this sorting criterion.
	 * Used as a label for the Sort menu and Filter palette flyout menu. If not assigned, name is displayed.
	 */
	displayName: string;

	/**
	 * The name of an Infoset property by which to sort.
	 * A string in the form infosetName.memberName, as defined by an Infoset and an InfosetMemberDescription object.
	 */
	infosetMember: string;

	/**
	 * The unique identifying name of this sort criterion.
	 */
	name: string;

	/**
	 * The data type of the criterion property.
	 * One of: date, string, number, dimensions, rating, resolution, colorProfile
	 */
	type: string;

	/**
	 * The namespace portion of an XMP property by which to sort.
	 */
	xmpNamespace: string;

	/**
	 * The URI key portion of an XMP property by which to sort.
	 */
	xmpUri: string;

}

/**
 * Represents atabbed palette in the Adobe Bridge browser window.
 * Allows a script to define and add a tabbed palette to a browser window. A script-defined palette is displayed in addition to the default palettes such as Favorites, Folders, Preview, Filter, Keywords, and Metadata. A script-defined palette can display a user interface defined in ScriptUI, or it can display HTML.
 * You can add a palette to an existing browser window at any time (as long as the identifier is unique), and you can use the create document event to add your palette to new browser windows on creation.
 * The name of a script-defined palette is automatically added to all relevant menus. You can specify where the tab goes, or move it programmatically. When it is shown, it can be dragged and dropped like the default palettes; scripts cannot query the current position..
 * You can show and hide individual palettes using this object's properties. A list of all defined palettes for a browser, including default palettes, is available in app.document.palettes.
 */
declare class TabbedPalette {
	/**
	 * When type is script, the ScriptUI Window object to display.
	 */
	content: object;

	/**
	 * A non-localized unique identifier for the palette.
	 * The identifiers for the built-in palettes are:favoritesTab, foldersTab, filterTab, metadataTab, keywordsTab, contentTab, cinemaPreviewTab, inspectorTab
	 */
	id: string;

	/**
	 * 
	 */
	showMenuItem: boolean;

	/**
	 * The localized string to display as the palette title.
	 */
	title: string;

	/**
	 * The type of content displayed in the palette; script (ScriptUI) or web (HTML).
	 */
	type: string;

	/**
	 * When type is web, the path to the page to display.
	 */
	url: string;

	/**
	 * When true, this palette is visible, when false it is hidden.
	 */
	visible: boolean;

	/**
	 * Removes this palette from the list of available palettes and destroys it.
	 */
	remove(): void;

	/**
	 * Moves this palette to a specific docking location in the browser.
	 * @param paletteColumn The horizontal location of the palette in the browser. One of "left" (the leftmost column), "center" (the middle column), or "right" (the rightmost column).
	 * @param paletteRow The vertical location of the palette in the browser. The number of rows can vary according to the current workspace configuration. This function cannot create new rows. A string or number, one of: "top": The topmost row (the default) "middle": The middle row (or close to the middle, if there are an even number) "bottom": The bottommost row Can be a number, the 0-based index of the row, where 0 is the topmost row. If the index is out of range, the palette is placed in the closest existing row.
	 */
	setLocation(paletteColumn: string, paletteRow?: string): void;

}


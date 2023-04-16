// To parse this data:
//
//   import { Convert, CheckIfAGivenUsernameAlreadyExists, GetMyUSERDetailsUser, CreateUSERWithValidTokenID, CreateUSERWithInvalidTokenID, CreateUSERWithSameEmailAddress, UpdateUSERUpdateUsername, UpdateUSERUpdateUsernameToNull, UpdateUSERUpdateUsernameToEmptyString, UpdateUSERUpdateProfilePhotoToNull, ProfilePhotoUploadPreSignedURL, GETPrivacySettings, PATCHPrivacySettings, GETUserBodyInfo, POSTUserBodyInfo, PUTUserBodyInfo, POSTUserProgressPhoto, GetListOfProgressPhotos, GetOtherUserProgressPhotosUserUserIDProgressPhoto, SaveUpdateTheProgressPhotos, GetUserProfile, GetOtherUserProfile, RetrieveWORKOUTVideoTags, RetrieveBLOGTags, RetrieveALLTags, GETArticleTags, RetrieveVideosOfALLTypesForDiscovery, RetrieveVideosOfWORKOUTTypeForDiscovery, RetrieveVideosOfCHALLENGETypeForDiscovery, RetrieveVideosOfHOWTOTypeForDiscovery, RetrieveVideosOfPROGRAMTypeForDiscovery, RetrievePostsOfRECIPETypeForDiscovery, RetrievePostsOfARTICLETypeForDiscovery, FilterALLVideosByTags, FilterWORKOUTVideosByTags, FilterCHALLENGEVideosByTags, FilterPROGRAMSByTags, FilterHOWTOByTags, FilterARTICLESByTags, FilterRECIPESByTags, RetrieveASingleWORKOUTVideo, RetrieveASingleCHALLENGEVideo, RetrieveASingleHOWTOVideo, RetrieveASingleRECIPE, RetrieveASingleARTICLE, RetrieveASinglePROGRAMAlongsideWithAssociatedVideos, CREATEANoteForWORKOUTVideo, CREATEANoteForCHALLENGEVideo, CREATEANoteForHOWTOVideo, CREATEANoteForPROGRAM, UpdateNoteOnAGivenVideo, UPDATEStreakAndLogWatchedVideoWORKOUT, UPDATEStreakAndLogWatchedVideoCHALLENGE, GETParticipantsOfAWORKOUT, GETParticipantsOfACHALLENGE, GETParticipantsOfAHOWTO, GETParticipantsOfAPROGRAM, SearchByKeywordInTheTitleInAllModelsNonExistentSearch, SearchByKeywordInTheTitleInAllModelsNonExistentSearchCopy, SearchByKeywordInTheTitleInAllModelsAll, SearchByKeywordInTheTitleOfAGivenGroupWorkout, SearchByKeywordInTheTitleOfAGivenGroupPrograms, SearchByKeywordInTheTitleOfAGivenGroupProgressTests, SearchByKeywordInTheTitleOfAGivenGroupRecipes, SearchByKeywordInTheTitleOfAGivenGroupArticles, SuccessfullySaveChallengeResult, SaveChallengeResultChallengeIDIsNull, SaveChallengeResultChallengeIDIsEmpty, SaveChallengeResultResultIsNull, SaveChallengeResultResultIsEmpty, SaveChallengeResultResultIsNegativeValue, SaveChallengeResultWrongChallengeID, GETWorkoutHistoryOfUser, FetchHLSURLsForAWorkout, FetchHLSURLForAChallenge, FetchHLSURLForAHowTo, GETXploreContentContentXploreAll, GETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest, GetFavouriteChallengesForUser, GetFavouriteHowToForUser, GetFavouriteProgramsForUser, GetFavouriteRecipesForUser, GetFavouriteArticlesForUser, GetFavouriteWorkoutsForUser, MarkWorkoutAsFavourite, CheckUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved, MarkArticleAsFavourite, CheckUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved, MarkRecipesAsFavourite, CheckUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved, MarkProgramAsFavourite, CheckUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved, MarkHowToAsFavourite, CheckUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved, MarkChallengeAsFavourite, CheckUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved, GETALLSCHEDULEDatesWithWorkoutInfo, CreateWorkoutSchedule, CreateProgramSchedule, UpdateSchedule, UpdateScheduleIncludingFollowingWorkouts, DeleteSchedule, CreateCommentWorkoutCommentGroupObjectID, CreateChallengeCommentCommentGroupObjectID, UpdateCommentCommentCommentID, POSTLIKEACommentCommentLikeCommentID, GETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID, GETCOMMENTSOfWorkoutURLCommentListGroupContentItemID, GETREPLIESOfTheCOMMENTURLCommentRepliesCommentID, AddReplyToCommentCommentCommentIDReply, AddReplyToCommentWithTAGGEDUser, GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls, REPORTCOMMENTREPLYCommentReportCommentID, GetStatistics, GETHOMECombinedData, GETHOMEChallengeStats, GETWelcomeScreenData, GETTermsAndConditions, PaginationExample } from "./file";
//
//   const checkIfAGivenUsernameAlreadyExists = Convert.toCheckIfAGivenUsernameAlreadyExists(json);
//   const getMyUSERDetailsUser = Convert.toGetMyUSERDetailsUser(json);
//   const createUSERWithValidTokenID = Convert.toCreateUSERWithValidTokenID(json);
//   const createUSERWithInvalidTokenID = Convert.toCreateUSERWithInvalidTokenID(json);
//   const createUSERWithSameEmailAddress = Convert.toCreateUSERWithSameEmailAddress(json);
//   const updateUSERUpdateUsername = Convert.toUpdateUSERUpdateUsername(json);
//   const updateUSERUpdateUsernameToNull = Convert.toUpdateUSERUpdateUsernameToNull(json);
//   const updateUSERUpdateUsernameToEmptyString = Convert.toUpdateUSERUpdateUsernameToEmptyString(json);
//   const updateUSERUpdateProfilePhotoToNull = Convert.toUpdateUSERUpdateProfilePhotoToNull(json);
//   const profilePhotoUploadPreSignedURL = Convert.toProfilePhotoUploadPreSignedURL(json);
//   const gETPrivacySettings = Convert.toGETPrivacySettings(json);
//   const pATCHPrivacySettings = Convert.toPATCHPrivacySettings(json);
//   const gETUserBodyInfo = Convert.toGETUserBodyInfo(json);
//   const pOSTUserBodyInfo = Convert.toPOSTUserBodyInfo(json);
//   const pUTUserBodyInfo = Convert.toPUTUserBodyInfo(json);
//   const pOSTUserProgressPhoto = Convert.toPOSTUserProgressPhoto(json);
//   const getListOfProgressPhotos = Convert.toGetListOfProgressPhotos(json);
//   const getOtherUserProgressPhotosUserUserIDProgressPhoto = Convert.toGetOtherUserProgressPhotosUserUserIDProgressPhoto(json);
//   const saveUpdateTheProgressPhotos = Convert.toSaveUpdateTheProgressPhotos(json);
//   const getUserProfile = Convert.toGetUserProfile(json);
//   const getOtherUserProfile = Convert.toGetOtherUserProfile(json);
//   const retrieveWORKOUTVideoTags = Convert.toRetrieveWORKOUTVideoTags(json);
//   const retrieveBLOGTags = Convert.toRetrieveBLOGTags(json);
//   const retrieveALLTags = Convert.toRetrieveALLTags(json);
//   const gETArticleTags = Convert.toGETArticleTags(json);
//   const retrieveVideosOfALLTypesForDiscovery = Convert.toRetrieveVideosOfALLTypesForDiscovery(json);
//   const retrieveVideosOfWORKOUTTypeForDiscovery = Convert.toRetrieveVideosOfWORKOUTTypeForDiscovery(json);
//   const retrieveVideosOfCHALLENGETypeForDiscovery = Convert.toRetrieveVideosOfCHALLENGETypeForDiscovery(json);
//   const retrieveVideosOfHOWTOTypeForDiscovery = Convert.toRetrieveVideosOfHOWTOTypeForDiscovery(json);
//   const retrieveVideosOfPROGRAMTypeForDiscovery = Convert.toRetrieveVideosOfPROGRAMTypeForDiscovery(json);
//   const retrievePostsOfRECIPETypeForDiscovery = Convert.toRetrievePostsOfRECIPETypeForDiscovery(json);
//   const retrievePostsOfARTICLETypeForDiscovery = Convert.toRetrievePostsOfARTICLETypeForDiscovery(json);
//   const filterALLVideosByTags = Convert.toFilterALLVideosByTags(json);
//   const filterWORKOUTVideosByTags = Convert.toFilterWORKOUTVideosByTags(json);
//   const filterCHALLENGEVideosByTags = Convert.toFilterCHALLENGEVideosByTags(json);
//   const filterPROGRAMSByTags = Convert.toFilterPROGRAMSByTags(json);
//   const filterHOWTOByTags = Convert.toFilterHOWTOByTags(json);
//   const filterARTICLESByTags = Convert.toFilterARTICLESByTags(json);
//   const filterRECIPESByTags = Convert.toFilterRECIPESByTags(json);
//   const retrieveASingleWORKOUTVideo = Convert.toRetrieveASingleWORKOUTVideo(json);
//   const retrieveASingleCHALLENGEVideo = Convert.toRetrieveASingleCHALLENGEVideo(json);
//   const retrieveASingleHOWTOVideo = Convert.toRetrieveASingleHOWTOVideo(json);
//   const retrieveASingleRECIPE = Convert.toRetrieveASingleRECIPE(json);
//   const retrieveASingleARTICLE = Convert.toRetrieveASingleARTICLE(json);
//   const retrieveASinglePROGRAMAlongsideWithAssociatedVideos = Convert.toRetrieveASinglePROGRAMAlongsideWithAssociatedVideos(json);
//   const cREATEANoteForWORKOUTVideo = Convert.toCREATEANoteForWORKOUTVideo(json);
//   const cREATEANoteForCHALLENGEVideo = Convert.toCREATEANoteForCHALLENGEVideo(json);
//   const cREATEANoteForHOWTOVideo = Convert.toCREATEANoteForHOWTOVideo(json);
//   const cREATEANoteForPROGRAM = Convert.toCREATEANoteForPROGRAM(json);
//   const updateNoteOnAGivenVideo = Convert.toUpdateNoteOnAGivenVideo(json);
//   const uPDATEStreakAndLogWatchedVideoWORKOUT = Convert.toUPDATEStreakAndLogWatchedVideoWORKOUT(json);
//   const uPDATEStreakAndLogWatchedVideoCHALLENGE = Convert.toUPDATEStreakAndLogWatchedVideoCHALLENGE(json);
//   const gETParticipantsOfAWORKOUT = Convert.toGETParticipantsOfAWORKOUT(json);
//   const gETParticipantsOfACHALLENGE = Convert.toGETParticipantsOfACHALLENGE(json);
//   const gETParticipantsOfAHOWTO = Convert.toGETParticipantsOfAHOWTO(json);
//   const gETParticipantsOfAPROGRAM = Convert.toGETParticipantsOfAPROGRAM(json);
//   const searchByKeywordInTheTitleInAllModelsNonExistentSearch = Convert.toSearchByKeywordInTheTitleInAllModelsNonExistentSearch(json);
//   const searchByKeywordInTheTitleInAllModelsNonExistentSearchCopy = Convert.toSearchByKeywordInTheTitleInAllModelsNonExistentSearchCopy(json);
//   const searchByKeywordInTheTitleInAllModelsAll = Convert.toSearchByKeywordInTheTitleInAllModelsAll(json);
//   const searchByKeywordInTheTitleOfAGivenGroupWorkout = Convert.toSearchByKeywordInTheTitleOfAGivenGroupWorkout(json);
//   const searchByKeywordInTheTitleOfAGivenGroupPrograms = Convert.toSearchByKeywordInTheTitleOfAGivenGroupPrograms(json);
//   const searchByKeywordInTheTitleOfAGivenGroupProgressTests = Convert.toSearchByKeywordInTheTitleOfAGivenGroupProgressTests(json);
//   const searchByKeywordInTheTitleOfAGivenGroupRecipes = Convert.toSearchByKeywordInTheTitleOfAGivenGroupRecipes(json);
//   const searchByKeywordInTheTitleOfAGivenGroupArticles = Convert.toSearchByKeywordInTheTitleOfAGivenGroupArticles(json);
//   const successfullySaveChallengeResult = Convert.toSuccessfullySaveChallengeResult(json);
//   const saveChallengeResultChallengeIDIsNull = Convert.toSaveChallengeResultChallengeIDIsNull(json);
//   const saveChallengeResultChallengeIDIsEmpty = Convert.toSaveChallengeResultChallengeIDIsEmpty(json);
//   const saveChallengeResultResultIsNull = Convert.toSaveChallengeResultResultIsNull(json);
//   const saveChallengeResultResultIsEmpty = Convert.toSaveChallengeResultResultIsEmpty(json);
//   const saveChallengeResultResultIsNegativeValue = Convert.toSaveChallengeResultResultIsNegativeValue(json);
//   const saveChallengeResultWrongChallengeID = Convert.toSaveChallengeResultWrongChallengeID(json);
//   const gETWorkoutHistoryOfUser = Convert.toGETWorkoutHistoryOfUser(json);
//   const fetchHLSURLsForAWorkout = Convert.toFetchHLSURLsForAWorkout(json);
//   const fetchHLSURLForAChallenge = Convert.toFetchHLSURLForAChallenge(json);
//   const fetchHLSURLForAHowTo = Convert.toFetchHLSURLForAHowTo(json);
//   const gETXploreContentContentXploreAll = Convert.toGETXploreContentContentXploreAll(json);
//   const gETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest = Convert.toGETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest(json);
//   const getFavouriteChallengesForUser = Convert.toGetFavouriteChallengesForUser(json);
//   const getFavouriteHowToForUser = Convert.toGetFavouriteHowToForUser(json);
//   const getFavouriteProgramsForUser = Convert.toGetFavouriteProgramsForUser(json);
//   const getFavouriteRecipesForUser = Convert.toGetFavouriteRecipesForUser(json);
//   const getFavouriteArticlesForUser = Convert.toGetFavouriteArticlesForUser(json);
//   const getFavouriteWorkoutsForUser = Convert.toGetFavouriteWorkoutsForUser(json);
//   const markWorkoutAsFavourite = Convert.toMarkWorkoutAsFavourite(json);
//   const checkUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved = Convert.toCheckUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved(json);
//   const markArticleAsFavourite = Convert.toMarkArticleAsFavourite(json);
//   const checkUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved = Convert.toCheckUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved(json);
//   const markRecipesAsFavourite = Convert.toMarkRecipesAsFavourite(json);
//   const checkUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved = Convert.toCheckUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved(json);
//   const markProgramAsFavourite = Convert.toMarkProgramAsFavourite(json);
//   const checkUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved = Convert.toCheckUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved(json);
//   const markHowToAsFavourite = Convert.toMarkHowToAsFavourite(json);
//   const checkUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved = Convert.toCheckUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved(json);
//   const markChallengeAsFavourite = Convert.toMarkChallengeAsFavourite(json);
//   const checkUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved = Convert.toCheckUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved(json);
//   const gETALLSCHEDULEDatesWithWorkoutInfo = Convert.toGETALLSCHEDULEDatesWithWorkoutInfo(json);
//   const gETALLOnlyDATES = Convert.toGETALLOnlyDATES(json);
//   const gETDATESForATIMEPeriod = Convert.toGETDATESForATIMEPeriod(json);
//   const gETForASpecificDATE = Convert.toGETForASpecificDATE(json);
//   const createWorkoutSchedule = Convert.toCreateWorkoutSchedule(json);
//   const createProgramSchedule = Convert.toCreateProgramSchedule(json);
//   const updateSchedule = Convert.toUpdateSchedule(json);
//   const updateScheduleIncludingFollowingWorkouts = Convert.toUpdateScheduleIncludingFollowingWorkouts(json);
//   const deleteSchedule = Convert.toDeleteSchedule(json);
//   const createCommentWorkoutCommentGroupObjectID = Convert.toCreateCommentWorkoutCommentGroupObjectID(json);
//   const createChallengeCommentCommentGroupObjectID = Convert.toCreateChallengeCommentCommentGroupObjectID(json);
//   const updateCommentCommentCommentID = Convert.toUpdateCommentCommentCommentID(json);
//   const pOSTLIKEACommentCommentLikeCommentID = Convert.toPOSTLIKEACommentCommentLikeCommentID(json);
//   const gETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID = Convert.toGETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID(json);
//   const gETCOMMENTSOfWorkoutURLCommentListGroupContentItemID = Convert.toGETCOMMENTSOfWorkoutURLCommentListGroupContentItemID(json);
//   const gETREPLIESOfTheCOMMENTURLCommentRepliesCommentID = Convert.toGETREPLIESOfTheCOMMENTURLCommentRepliesCommentID(json);
//   const addReplyToCommentCommentCommentIDReply = Convert.toAddReplyToCommentCommentCommentIDReply(json);
//   const addReplyToCommentWithTAGGEDUser = Convert.toAddReplyToCommentWithTAGGEDUser(json);
//   const gETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls = Convert.toGETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls(json);
//   const rEPORTCOMMENTREPLYCommentReportCommentID = Convert.toREPORTCOMMENTREPLYCommentReportCommentID(json);
//   const gETPERFECTSTARTPrograms = Convert.toGETPERFECTSTARTPrograms(json);
//   const getStatistics = Convert.toGetStatistics(json);
//   const gETHOMECombinedData = Convert.toGETHOMECombinedData(json);
//   const gETHOMEChallengeStats = Convert.toGETHOMEChallengeStats(json);
//   const gETWelcomeScreenData = Convert.toGETWelcomeScreenData(json);
//   const gETTermsAndConditions = Convert.toGETTermsAndConditions(json);
//   const paginationExample = Convert.toPaginationExample(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * Check if a given username already exists
 *
 * GET {{url}}/user/check-username/?username=neetha2160
 *
 * Required
 *
 * *   first_name: max length 255
 * *   last_name: max_length 255
 * *   email: max length 255 (Unique)
 *
 *
 * Optional
 *
 * *   date_of_birth format is YYY-MM-DD
 * *   gender enums are: 0 for Male, 1 for Female
 *
 *
 * Headers:
 *
 * Authorization: Bearer cognito_id_token
 */
export interface CheckIfAGivenUsernameAlreadyExists {
  username_available: boolean;
  status:             number;
}

/**
* Get my USER details  /user/
*
* GET {{url}}/user/
*/
export interface GetMyUSERDetailsUser {
  id:            string;
  first_name:    string;
  last_name:     string;
  email:         string;
  gender:        number;
  date_of_birth: Date;
  profile_photo: null;
  username:      string;
}

/**
* Create USER with valid tokenId
*
* POST {{url}}/user/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface CreateUSERWithValidTokenID {
  id?:            string;
  first_name:    string;
  last_name:     string;
  email:         string;
  gender:        number;
  date_of_birth: Date|string;
  username:      string;
}

/**
* Create USER with invalid tokenId
*
* POST {{url}}/user/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface CreateUSERWithInvalidTokenID {
  id:            string;
  first_name:    string;
  last_name:     string;
  email:         string;
  gender:        number;
  date_of_birth: Date;
  username:      string;
}

/**
* Create USER with same email address
*
* POST {{url}}/user/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface CreateUSERWithSameEmailAddress {
  id:            string;
  first_name:    string;
  last_name:     string;
  email:         string;
  gender:        number;
  date_of_birth: Date;
  username:      string;
}

/**
* Update USER - Update username
*
* PATCH {{url}}/user/969b9c0c-28ea-4dcb-9dad-f9bc2e788e85/
*
* Email cannot be updated.
*/
export interface UpdateUSERUpdateUsername {
  id:            string;
  first_name:    string;
  last_name:     string;
  email:         string;
  gender:        number;
  date_of_birth: Date;
  profile_photo: string;
  username:      string;
}

/**
* Update USER - Update username to null
*
* PATCH {{url}}/user/7ad626501-4cd9-41e0-a9d4-69f4006f346e/
*
* Email cannot be updated.
*/
export interface UpdateUSERUpdateUsernameToNull {
  id:            string;
  first_name:    string;
  last_name:     string;
  email:         string;
  gender:        number;
  date_of_birth: Date;
  profile_photo: string;
  username:      string;
}

/**
* Update USER - Update username to empty string
*
* PATCH {{url}}/user/70e30475-b2bd-4a39-9078-5a61aa07f762/
*
* Email cannot be updated.
*/
export interface UpdateUSERUpdateUsernameToEmptyString {
  id:            string;
  first_name:    string;
  last_name:     string;
  email:         string;
  gender:        number;
  date_of_birth: Date;
  profile_photo: string;
  username:      string;
}

/**
* Update USER - Update profile photo to null
*
* PATCH {{url}}/user/969b9c0c-28ea-4dcb-9dad-f9bc2e788e85/
*
* Email cannot be updated.
*/
export interface UpdateUSERUpdateProfilePhotoToNull {
  id:            string;
  first_name:    string;
  last_name:     string;
  email:         string;
  gender:        number;
  date_of_birth: Date;
  profile_photo: string;
  username:      string;
}

/**
* Profile photo upload pre-signed URL
*
* POST {{url}}/user/photo-upload/
*/
export interface ProfilePhotoUploadPreSignedURL {
  url:  string;
  data: Data;
  key:  string;
}

export interface Data {
  key:             string;
  "Content-Type"?: string;
  AWSAccessKeyId:  AWSAccessKeyID;
  policy:          string;
  signature:       string;
}

export enum AWSAccessKeyID {
  Akia3Tqljcgct3Atwyv5 = "AKIA3TQLJCGCT3ATWYV5",
}

/**
* GET privacy settings
*
* GET {{url}}/user/privacy-settings/
*/
export interface GETPrivacySettings {
  show_statistics:    boolean;
  show_challenges:    boolean;
  show_progress_pics: boolean;
}

/**
* PATCH privacy settings
*
* PATCH {{url}}/user/privacy-settings/
*/
export interface PATCHPrivacySettings {
  show_statistics:    boolean;
  show_challenges:    boolean;
  show_progress_pics: boolean;
  show_profile:       boolean;
}

/**
* GET User Body Info
*
* GET {{url}}/user/body-info/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface GETUserBodyInfo {
  body_info: BodyInfo | null;
}

export interface BodyInfo {
  height: Eight;
  weight: Eight;
}

export interface Eight {
  unit:  string;
  value: number;
}

/**
* POST User Body Info
*
* POST {{url}}/user/body-info/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface POSTUserBodyInfo {
  detail?:      string;
  status_code?: number;
  height?:      Eight;
  weight?:      Eight;
}

/**
* PUT User Body Info
*
* PUT {{url}}/user/body-info/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface PUTUserBodyInfo {
  height: Eight;
  weight: Eight;
}

/**
* POST User Progress Photo
*
* POST {{url}}/user/progress-photo-upload/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface POSTUserProgressPhoto {
  id:                string;
  image_upload_urls: ImageUploadUrls;
}

export interface ImageUploadUrls {
  front: Back;
  back:  Back;
  side:  Back;
}

export interface Back {
  url:  string;
  data: Data;
  key:  string;
}

/**
* Get list of  Progress Photos
*
* GET {{url}}/user/progress-photo/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface GetListOfProgressPhotos {
  count:    number;
  next:     null;
  previous: null;
  results:  GetListOfProgressPhotosResult[];
}

export interface GetListOfProgressPhotosResult {
  created_at:      Date;
  id:              string;
  front_image_url: string;
  back_image_url:  string;
  side_image_url:  string;
}

/**
* Get other user  Progress Photos /user/user_id/progress-photo/
*
* GET {{url}}/user/5637ea7f-e70c-470f-8f78-4160eaf7c556/progress-photo/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface GetOtherUserProgressPhotosUserUserIDProgressPhoto {
  count:    number;
  next:     null;
  previous: null;
  results:  GetListOfProgressPhotosResult[];
}

/**
* Save/Update the progress photos
*
* PATCH {{url}}/user/progress-photo/32c5c8bb-d034-4860-be31-e0b1d2ae97b4/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface SaveUpdateTheProgressPhotos {
  created_at:      Date;
  id:              string;
  front_image_url: string;
  back_image_url:  string;
  side_image_url:  string;
}

/**
* GET USER PROFILE
*
* GET {{url}}/user/profile/all/
*/
export interface GetUserProfile {
  full_name:         FullName;
  username:          string;
  profile_photo:     string;
  statistics:        GETUSERPROFILEStatistics;
  challenge_results: ChallengeResults;
}

export interface ChallengeResults {
  total_challenges: number;
  best_scores:      PurpleBestScore[];
}

export interface PurpleBestScore {
  challenge:      string;
  best_result:    number;
  challenge_type: string;
}

export enum FullName {
  AnkurAdlakha = "Ankur adlakha",
  MockEditUser = "MockEdit User",
}

export interface GETUSERPROFILEStatistics {
  completed_workouts:   string;
  current_streak:       string;
  completed_challenges: string;
}

/**
* GET OTHER USER PROFILE
*
* GET {{url}}/user/visit/ff050338-8264-4462-8731-ea23b28c6763/
*/
export interface GetOtherUserProfile {
  full_name:         string;
  username:          string;
  profile_photo:     string;
  statistics:        GETOTHERUSERPROFILEStatistics | null;
  challenge_results: Challenge | null;
}

export interface Challenge {
  total_challenges: number;
  best_scores:      ChallengesBestScore[];
}

export interface ChallengesBestScore {
  challenge:   string;
  best_result: number;
}

export interface GETOTHERUSERPROFILEStatistics {
  completed_workouts:   number;
  current_streak:       number;
  completed_challenges: number;
}

/**
* Retrieve WORKOUT video tags
*
* GET {{url}}/content/workout/tags/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveWORKOUTVideoTags {
  tag_groups: TagGroup[];
}

export interface TagGroup {
  tag_group: string;
  tags:      Tag[];
}

export interface Tag {
  id:   string;
  name: string;
}

/**
* Retrieve BLOG tags
*
* GET {{url}}/content/blog/tags/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveBLOGTags {
  tag_groups: TagGroup[];
}

/**
* Retrieve ALL tags
*
* GET {{url}}/content/all/tags/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveALLTags {
  tag_groups: TagGroup[];
}

/**
* GET Article Tags
*
* GET {{url}}/content/article/tags/
*/
export interface GETArticleTags {
  tag_groups: TagGroup[];
}

/**
* Retrieve videos of ALL types for discovery
*
* GET {{url}}/content/discover/all/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveVideosOfALLTypesForDiscovery {
  most_popular: NextWorkout[];
  newest:       NextWorkout[];
  similar:      NextWorkout[];
}

export interface NextWorkout {
  id:                       string;
  title:                    string;
  subtitle:                 Subtitle | null;
  description:              string;
  duration:                 number | null;
  thumbnail:                null | string;
  type:                     NextWorkoutType;
  day?:                     null | string;
  smaller_thumbnail_field?: null | string;
  completed?:               boolean;
  scheduled_at?:            string;
  is_part_of_program?:      boolean;
}

export enum Subtitle {
  BeastmodeSeriesDay6 = "Beastmode Series Day 6",
  BeastmodeSeriesDay9Subtitle = "Beastmode Series Day 9 Subtitle",
  CachingTest = "Caching test",
  CicuitSeriesDay5 = "Cicuit Series Day 5",
  Empty = "",
  HowTo1 = "How To 1",
  HowToTest = "How To Test",
  IronSeriesDay8Subtitle = "Iron Series Day 8 Subtitle",
  NoWarmupVideo = "No warmup video",
  Sub = "sub",
  TestChallengeSUB = "Test Challenge SUB",
  TestHowTo = "TEST HOW TO",
  The30MinFULLBODYSTRENGTHWorkoutWithWeights = "30 min FULL BODY STRENGTH Workout with Weights",
  ThisIsATestSubtitle = "This is a test subtitle",
}

export enum NextWorkoutType {
  Challenge = "challenge",
  HowTo = "how-to",
  Program = "program",
  Workout = "workout",
}

/**
* Retrieve videos of WORKOUT type for discovery
*
* GET {{url}}/content/discover/workout/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveVideosOfWORKOUTTypeForDiscovery {
  most_popular: NextWorkout[];
  newest:       NextWorkout[];
  similar:      NextWorkout[];
}

/**
* Retrieve videos of CHALLENGE type for discovery
*
* GET {{url}}/content/discover/challenge/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveVideosOfCHALLENGETypeForDiscovery {
  most_popular: NextWorkout[];
  newest:       NextWorkout[];
  similar:      NextWorkout[];
}

/**
* Retrieve videos of HOW-TO type for discovery
*
* GET {{url}}/content/how-to/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveVideosOfHOWTOTypeForDiscovery {
  most_popular: NextWorkout[];
  newest:       NextWorkout[];
  similar:      NextWorkout[];
}

/**
* Retrieve videos of PROGRAM type for discovery
*
* GET {{url}}/content/discover/program/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveVideosOfPROGRAMTypeForDiscovery {
  most_popular: NextWorkout[];
  newest:       NextWorkout[];
  similar:      NextWorkout[];
}

/**
* Retrieve posts of RECIPE type for discovery
*
* GET {{url}}/content/discover/recipe/
*/
export interface RetrievePostsOfRECIPETypeForDiscovery {
  most_popular: MostPopular[];
  newest:       MostPopular[];
  similar:      MostPopular[];
}

export interface MostPopular {
  id:        string;
  title:     string;
  thumbnail: null | string;
  subtitle:  string;
  type?:     RetrieveASingleRECIPEType;
  duration?: number | null;
}

export enum RetrieveASingleRECIPEType {
  Article = "article",
  Recipe = "recipe",
}

/**
* Retrieve posts of ARTICLE type for discovery
*
* GET {{url}}/content/discover/article/
*/
export interface RetrievePostsOfARTICLETypeForDiscovery {
  most_popular: MostPopular[];
  newest:       MostPopular[];
  similar:      MostPopular[];
}

/**
* Filter ALL Videos by Tags
*
* GET {{url}}/content/all/?tags=e5be52c1-a51e-42ff-a6b3-2cf751d5fbe9
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FilterALLVideosByTags {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Filter WORKOUT Videos by Tags
*
* GET
*
* {{url}}/content/workout/?tags=9f6d2b68-5998-4511-8a25-2b452644e1dc,aa3af339-67ff-4af3-95b7-dd6f5e0c16c5
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FilterWORKOUTVideosByTags {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Filter CHALLENGE Videos by Tags
*
* GET {{url}}/content/challenge/?tags=bb579145-e6df-42a6-a309-4e78877df460
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FilterCHALLENGEVideosByTags {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Filter PROGRAMS by Tags
*
* GET {{url}}/content/program/?tags=7447b5a2-ae23-4cf1-b468-8e36d60327d1
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FilterPROGRAMSByTags {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Filter HOWTO by Tags
*
* GET
*
* {{url}}/content/how-to/?tags=8e0707b9-c85e-4d40-9e7a-1524274a37fd,f6ac5501-f65c-4304-a22b-d00ce0c6e7ba,9f6d2b68-5998-4511-8a25-2b452644e1dc,a0f9d727-fa70-48e2-ba09-33dc98f40592,9e4a6779-d1f6-4154-8d9c-f8737962ca25,7bf93479-8f64-4539-b608-d8cf348e1612,bb579145-e6df-42a6-a309-4e78877df460,a68e7b0f-3cb3-4ac3-81f4-d255879c64db,33761fa5-900d-423b-a986-8cb54859ac67,4bdfa53d-63fe-4850-9185-cdf6f37e25fd,cb8d9afd-3bc0-4b7b-b6c3-41a19848b117,29c62b65-f9e8-48f8-9376-74198c282ae5,624d67af-e5ce-44e5-aa45-bd6774d7c5a4,1de48c53-b5f4-4800-b3f9-b4d3211903ad,74e2a12b-733d-492d-9b1b-fd547f379246,d3d4e13a-c13b-4277-b8dc-4f9c341ef35e,731493ca-b182-48da-8d4f-56efaed93e42,ab8048ed-730a-43ff-81b8-cce1dbcbd098,08c9c16e-561e-4cf8-85f6-ae64cc9b02fd,12f1eb29-1335-4bc4-ba8a-e95c765a3251,782b55d6-fb02-4d22-a018-10acdb931da2,d031f50b-caf7-4fb1-ac92-ac7f6abbb452,9a6d233c-1377-4ea5-888b-afdbd2d172a9,35ce9d71-a317-42f0-9eec-b2a04db7541d,3af2f440-6a52-4205-a070-bfc4fdf9a612,33798867-dd65-43fa-af54-ba3243596eeb,36447810-8310-43e7-87fc-adac989946c2,64d375d7-08a1-4c04-99af-99af802445bf,f0e6bcc6-ccd7-4602-a323-6ed0d8f1a412,580b3bbb-a4b0-45d8-98be-92a00f3d0438,ba464c42-ca0b-4c2d-83d5-e7e192b44c36,7447b5a2-ae23-4cf1-b468-8e36d60327d1,34a8b8e3-747a-41fc-ae78-4f8535ae4fb0,be4daef0-203f-4680-84cb-78e6c350b150,69e6e8cf-4868-4a7b-858e-ef305ed9399c,25b8139f-59b3-4178-a5f9-bc1120ac7381,4f8f5247-4705-4080-8105-544464630402,e623894b-632f-44a7-a52b-dab8647efbd8,941b7797-4d96-4265-8aef-06a4095902ad
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FilterHOWTOByTags {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Filter ARTICLES by tags
*
* GET {{url}}/content/article/?tags=2e0af06c-5c93-42a9-8bf1-3910f8f8e5b8
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FilterARTICLESByTags {
  count:    number;
  next:     null;
  previous: null;
  results:  any[];
}

/**
* Filter RECIPES by tags
*
* GET {{url}}/content/recipe/?tags=d87632de-8f48-449b-af76-09b09747795c
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FilterRECIPESByTags {
  count:    number;
  next:     null;
  previous: null;
  results:  any[];
}

/**
* Retrieve a single WORKOUT video
*
* GET {{url}}/content/workout/3efb2b3f-2797-4d53-8fe8-3767511e8944/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveASingleWORKOUTVideo {
  id:                       string;
  title:                    string; 
  subtitle:                 Subtitle;
  description:              string;
  duration:                 number;
  thumbnail:                string;
  smaller_thumbnail_field:  string;
  type:                     NextWorkoutType;
  day:                      string;
  note:                     {note:string, id:string|number};
  content_type:             number;
  participants:             Participants;
  is_favourite:             boolean;
  button_colours:           ButtonColours;
  button_text_colours:      ButtonColours;
  next_workout:             NextWorkout;
  comments:                 any[];
  workout_length:           Equipment[];
  workout_type:             Equipment[];
  equipment:                Equipment[];
  muscle_group:             Equipment[];
  level:                    Equipment[];
  others:                   Equipment[];
  intro_video:              IntroVideo;
  workout_video:            Video;
  workout_video_with_music: IntroVideo;
  warmup_video:             Video;
  warmup_video_with_music:  IntroVideo;
  workouts:                 NextWorkout[];
}

export interface ButtonColours {
  light_mode: string;
  dark_mode:  string;
}

export interface Equipment {
  id:       string;
  name:     string;
  category: string;
}

export interface IntroVideo {
  video: string;
  file:  string;
}

export interface Participants {
  total:          number;
  profile_photos: Array<null | string>;
}

export interface Video {
  video:      string;
  file:       string;
  music_link: null | string;
}

/**
* Retrieve a single CHALLENGE video
*
* GET {{url}}/content/challenge/dfef8647-b637-4464-84dc-8ab683e18fe9/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveASingleCHALLENGEVideo {
  id:                       string;
  title:                    string;
  subtitle:                 Subtitle;
  description:              string;
  duration:                 number;
  thumbnail:                string;
  smaller_thumbnail_field:  null;
  type:                     NextWorkoutType;
  note:                     null;
  content_type:             number;
  participants:             Participants;
  is_favourite:             boolean;
  button_colours:           ButtonColours;
  button_text_colours:      ButtonColours;
  prompt:                   null;
  progress:                 Progress;
  comments:                 any[];
  other_videos:             NextWorkout[];
  how_to:                   string;
  workout_length:           Equipment[];
  workout_type:             Equipment[];
  equipment:                Equipment[];
  muscle_group:             Equipment[];
  level:                    Equipment[];
  others:                   Equipment[];
  workout_video:            Video;
  workout_video_with_music: IntroVideo;
}

export interface Progress {
  best_result: null;
  results:     any[];
}

/**
* Retrieve a single HOWTO video
*
* GET {{url}}/content/how-to/4e86b997-69bc-464b-b680-2a6be9e94d2c/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveASingleHOWTOVideo {
  id:                  string;
  title:               Subtitle;
  subtitle:            Subtitle;
  description:         Subtitle;
  duration:            number;
  thumbnail:           string;
  type:                NextWorkoutType;
  note:                null;
  content_type:        number;
  participants:        Participants;
  is_favourite:        boolean;
  button_colours:      ButtonColours;
  button_text_colours: ButtonColours;
  other_videos:        NextWorkout[];
  workout_length:      any[];
  workout_type:        any[];
  equipment:           any[];
  muscle_group:        any[];
  level:               any[];
  others:              any[];
  workout_video:       IntroVideo;
}

/**
* Retrieve a single RECIPE
*
* GET {{url}}/content/recipe/d51ba586-9e75-4a78-8b01-90a37bf558bc/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveASingleRECIPE {
  id:           string;
  title:        string;
  thumbnail:    null;
  type:         RetrieveASingleRECIPEType;
  is_favourite: boolean;
  created_at:   string;
  content:      string;
}

/**
* Retrieve a single ARTICLE
*
* GET {{url}}/content/article/18e3e83f-61cc-4bbf-b7a6-8c75acf647ec/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveASingleARTICLE {
  id:           string;
  title:        string;
  thumbnail:    null;
  type:         RetrieveASingleRECIPEType;
  is_favourite: boolean;
  created_at:   string;
  content:      string;
}

/**
* Retrieve a single PROGRAM alongside with associated videos
*
* GET {{url}}/content/program/{{program_id}}/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface RetrieveASinglePROGRAMAlongsideWithAssociatedVideos {
  id:                  string;
  title:               string;
  subtitle:            string;
  description:         string;
  duration:            null;
  thumbnail:           string;
  type:                NextWorkoutType;
  workouts:            NextWorkout[];
  is_favourite:        boolean;
  content_type:        number;
  comments:            any[];
  participants:        Participants;
  button_colours:      ButtonColours;
  button_text_colours: ButtonColours;
  workout_length:      Equipment[];
  workout_type:        Equipment[];
  equipment:           Equipment[];
  muscle_group:        Equipment[];
  level:               Equipment[];
  others:              Equipment[];
}

/**
* CREATE a note for WORKOUT video
*
* POST {{url}}/content/note/workout/24301203-d4df-48c7-9806-c0fed47d3e9c/
*/
export interface CREATEANoteForWORKOUTVideo {
  note: string;
}

/**
* CREATE a note for CHALLENGE video
*
* POST {{url}}/content/note/challenge/5ae11c46-4942-48af-954d-a60dab329b13/
*/
export interface CREATEANoteForCHALLENGEVideo {
  note: string;
}

/**
* CREATE a note for HOW-TO video
*
* POST {{url}}/content/note/how-to/ca46dd30-e1d5-442c-9c23-8ebf3ab6ec11/
*/
export interface CREATEANoteForHOWTOVideo {
  note: string;
}

/**
* CREATE a note for PROGRAM
*
* POST {{url}}/content/note/program/2e41ea4a-564c-4fea-9823-4d2bed8ebe7d/
*/
export interface CREATEANoteForPROGRAM {
  note: string;
}

/**
* Update note on a given video
*
* PATCH {{url}}/content/note/538938bd-e139-4abb-8e2d-c1ac25a3181d/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface UpdateNoteOnAGivenVideo {
  note: string;
}

/**
* UPDATE Streak and log watched video WORKOUT
*
* POST {{url}}/streak/update/workout/8c6d7e9f-866b-4f14-81a8-fb6f3f3810f2/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface UPDATEStreakAndLogWatchedVideoWORKOUT {
}

/**
* UPDATE Streak and log watched video CHALLENGE
*
* POST {{url}}/streak/update/challenge/390e4dba-bc34-400e-9749-0a3a546989d0/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface UPDATEStreakAndLogWatchedVideoCHALLENGE {
}

/**
* GET participants of a WORKOUT
*
* GET {{url}}/content/participants/workout/b803bae0-e182-49c9-b026-dbc914df71d1/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface GETParticipantsOfAWORKOUT {
  count:    number;
  next:     null;
  previous: null;
  results:  GETParticipantsOfAWORKOUTResult[];
}

export interface GETParticipantsOfAWORKOUTResult {
  id:            string;
  full_name:     string;
  profile_photo: null;
}

/**
* GET participants of a CHALLENGE
*
* GET {{url}}/content/participants/challenge/b8acd664-e805-4208-aae1-58e02061f91b/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface GETParticipantsOfACHALLENGE {
  count:    number;
  next:     null;
  previous: null;
  results:  GETParticipantsOfAWORKOUTResult[];
}

/**
* GET participants of a HOW-TO
*
* GET {{url}}/content/participants/how-to/ca46dd30-e1d5-442c-9c23-8ebf3ab6ec11/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface GETParticipantsOfAHOWTO {
  count:    number;
  next:     null;
  previous: null;
  results:  GETParticipantsOfAWORKOUTResult[];
}

/**
* GET participants of a PROGRAM
*
* GET {{url}}/content/participants/program/4d3f29e0-fe09-426e-8e05-9cde1a91ca44/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface GETParticipantsOfAPROGRAM {
  count:    number;
  next:     null;
  previous: null;
  results:  GETParticipantsOfAWORKOUTResult[];
}

/**
* Search by keyword in the title in all models - Non-existent search
*
* GET {{url}}/content/search?q=workout
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface SearchByKeywordInTheTitleInAllModelsNonExistentSearch {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Search by keyword in the title in all models - Non-existent search Copy
*
* GET {{url}}/content/search?q=zzzzzzz
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface SearchByKeywordInTheTitleInAllModelsNonExistentSearchCopy {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Search by keyword in the title in all models - All
*
* GET {{url}}/content/search?group=all&q=w
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface SearchByKeywordInTheTitleInAllModelsAll {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Search by keyword in the title of a given group - Workout
*
* GET {{url}}/content/search?q=test&group=workout
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface SearchByKeywordInTheTitleOfAGivenGroupWorkout {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Search by keyword in the title of a given group - Programs
*
* GET {{url}}/content/search?q=test&group=program
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface SearchByKeywordInTheTitleOfAGivenGroupPrograms {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Search by keyword in the title of a given group - Progress Tests
*
* GET {{url}}/content/search?q=test&group=challenge
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface SearchByKeywordInTheTitleOfAGivenGroupProgressTests {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Search by keyword in the title of a given group - recipes
*
* GET {{url}}/content/search?q=chicken&group=recipe
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface SearchByKeywordInTheTitleOfAGivenGroupRecipes {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Search by keyword in the title of a given group - Articles
*
* GET {{url}}/content/search?q=chicken&group=recipe
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface SearchByKeywordInTheTitleOfAGivenGroupArticles {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Successfully save challenge result
*
* POST {{url}}/content/challenge-result/4ca5a834-2219-4711-aae2-fcd6365954c8/
*/
export interface SuccessfullySaveChallengeResult {
  id:           string;
  challenge_id: string;
  result:       number;
}

/**
* Save challenge result - challenge id is null
*
* POST {{url}}/content/challenge-result/
*/
export interface SaveChallengeResultChallengeIDIsNull {
  id:           string;
  challenge_id: string;
  result:       number;
}

/**
* Save challenge result - challenge id is empty
*
* POST {{url}}/content/challenge-result/
*/
export interface SaveChallengeResultChallengeIDIsEmpty {
  id:           string;
  challenge_id: string;
  result:       number;
}

/**
* Save challenge result - result is null
*
* POST {{url}}/content/challenge-result/d5970f20-80e9-4269-bf51-d17ebe15646f
*/
export interface SaveChallengeResultResultIsNull {
  id:           string;
  challenge_id: string;
  result:       number;
}

/**
* Save challenge result - result is empty
*
* POST {{url}}/content/challenge-result/d5970f20-80e9-4269-bf51-d17ebe15646f
*/
export interface SaveChallengeResultResultIsEmpty {
  id:           string;
  challenge_id: string;
  result:       number;
}

/**
* Save challenge result - result is negative value
*
* POST {{url}}/content/challenge-result/d5970f20-80e9-4269-bf51-d17ebe15646f
*/
export interface SaveChallengeResultResultIsNegativeValue {
  id:           string;
  challenge_id: string;
  result:       number;
}

/**
* Save challenge result - wrong challenge id
*
* POST {{url}}/content/challenge-result/d5970f20-80e9-4269-bf51-d17ebe15646t
*/
export interface SaveChallengeResultWrongChallengeID {
  id:           string;
  challenge_id: string;
  result:       number;
}

/**
* GET Workout History of User
*
* GET {{url}}/content/workout/history/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface GETWorkoutHistoryOfUser {
  count:    number;
  next:     null;
  previous: null;
  results:  GETWorkoutHistoryOfUserResult[];
}

export interface GETWorkoutHistoryOfUserResult {
  date:     string;
  workouts: MostPopular[];
}

/**
* Fetch HLS URLs for a Workout
*
* GET {{url}}/content/workout/{{workout_id}}/hls/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FetchHLSURLsForAWorkout {
  intro_video:   string;
  warmup_video:  string;
  workout_video: string;
}

/**
* Fetch HLS URL for a Challenge
*
* GET {{url}}/content/challenge/dfef8647-b637-4464-84dc-8ab683e18fe9/hls/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FetchHLSURLForAChallenge {
  workout_video: string;
}

/**
* Fetch HLS URL for a HowTo
*
* GET {{url}}/content/how-to/{{how_to_id}}/hls/
*
* Required
*
* *   first_name: max length 255
* *   last_name: max_length 255
* *   email: max length 255 (Unique)
*
*
* Optional
*
* *   date_of_birth format is YYY-MM-DD
* *   gender enums are: 0 for Male, 1 for Female
*
*
* Headers:
*
* Authorization: Bearer cognito_id_token
*/
export interface FetchHLSURLForAHowTo {
  workout_video: string;
}

/**
* GET Xplore content /content/xplore/all/
*
* GET {{url}}/content/xplore/all/
*/
export interface GETXploreContentContentXploreAll {
  comments:     CommentElement[];
  participants: Participants;
}

export interface CommentElement {
  id:            string;
  full_name:     FullName;
  profile_photo: null | string;
  created_at:    CreatedAt;
  comment:       CommentEnum;
  pinned:        boolean;
}

export enum CommentEnum {
  Hi = "Hi",
  MockComment = "Mock Comment",
}

export enum CreatedAt {
  The16H = "16h",
  The1D = "1d",
  The23H = "23h",
}

/**
* GET Latest data of item comments and participants /content/<group>/<id>/latest/
*
* GET {{url}}/content/workout/45d583f5-13c4-4f15-9dcd-af2a5d8fc1e4/latest/
*/
export interface GETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest {
  comments:     CommentElement[];
  participants: Participants;
}

/**
* Get Favourite Challenges for user
*
* GET {{url}}/favourite/challenge/
*/
export interface GetFavouriteChallengesForUser {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Get Favourite How To for user
*
* GET {{url}}/favourite/how-to/
*/
export interface GetFavouriteHowToForUser {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Get Favourite Programs for user
*
* GET {{url}}/favourite/program/
*/
export interface GetFavouriteProgramsForUser {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Get Favourite Recipes for user
*
* GET {{url}}/favourite/recipe/
*/
export interface GetFavouriteRecipesForUser {
  count:    number;
  next:     null;
  previous: null;
  results:  MostPopular[];
}

/**
* Get Favourite Articles for user
*
* GET {{url}}/favourite/article/
*/
export interface GetFavouriteArticlesForUser {
  count:    number;
  next:     null;
  previous: null;
  results:  MostPopular[];
}

/**
* Get Favourite Workouts for user
*
* GET {{url}}/favourite/workout/
*/
export interface GetFavouriteWorkoutsForUser {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Mark workout as favourite
*
* POST {{url}}/favourite/workout/fd4e8e8b-4a9a-4c93-8a79-c39509193719/
*/
export interface MarkWorkoutAsFavourite {
  object_id:    string;
  content_type: number;
}

/**
* Check user can only add workout to favourite again once favourite has been removed
*
* POST {{url}}/favourite/workout/fd4e8e8b-4a9a-4c93-8a79-c39509193719/
*/
export interface CheckUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved {
  object_id:    string;
  content_type: number;
}

/**
* Mark article as favourite
*
* POST {{url}}/favourite/article/cf0044e0-2c56-43df-bf93-c0d65d30133a/
*/
export interface MarkArticleAsFavourite {
  object_id:    string;
  content_type: number;
}

/**
* Check user can only add article to favourite again once favourite has been removed
*
* POST {{url}}/favourite/article/fd4e8e8b-4a9a-4c93-8a79-c39509193719/
*/
export interface CheckUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved {
  object_id:    string;
  content_type: number;
}

/**
* Mark recipes as favourite
*
* POST {{url}}/favourite/recipe/d51ba586-9e75-4a78-8b01-90a37bf558bc/
*/
export interface MarkRecipesAsFavourite {
  object_id:    string;
  content_type: number;
}

/**
* Check user can only add recipes to favourite again once favourite has been removed
*
* POST {{url}}/favourite/recipe/fd4e8e8b-4a9a-4c93-8a79-c39509193719/
*/
export interface CheckUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved {
  object_id:    string;
  content_type: number;
}

/**
* Mark program as favourite
*
* POST {{url}}/favourite/program/94c09d1c-2176-42da-9982-c4d199d5dfa8/
*/
export interface MarkProgramAsFavourite {
  object_id:    string;
  content_type: number;
}

/**
* Check user can only add program to favourite again once favourite has been removed
*
* POST {{url}}/favourite/program/fd4e8e8b-4a9a-4c93-8a79-c39509193719/
*/
export interface CheckUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved {
  object_id:    string;
  content_type: number;
}

/**
* Mark how to as favourite
*
* POST {{url}}/favourite/howto/9e4c2a53-8ba1-4f01-854e-658c9e33ad33/
*/
export interface MarkHowToAsFavourite {
  object_id:    string;
  content_type: number;
}

/**
* Check user can only add how to to favourite again once favourite has been removed
*
* POST {{url}}/favourite/howto/fd4e8e8b-4a9a-4c93-8a79-c39509193719/
*/
export interface CheckUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved {
  object_id:    string;
  content_type: number;
}

/**
* Mark challenge as favourite
*
* POST {{url}}/favourite/challenge/d5970f20-80e9-4269-bf51-d17ebe15646f/
*/
export interface MarkChallengeAsFavourite {
  object_id:    string;
  content_type: number;
}

/**
* Check user can only add challenge to favourite again once favourite has been removed
*
* POST {{url}}/favourite/challenge/fd4e8e8b-4a9a-4c93-8a79-c39509193719/
*/
export interface CheckUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved {
  object_id:    string;
  content_type: number;
}

/**
* GET ALL SCHEDULE dates with workout info
*
* GET {{url}}/schedule/workout
*/
export interface GETALLSCHEDULEDatesWithWorkoutInfo {
  count:    number;
  next:     null;
  previous: null;
  results:  NextWorkout[];
}

/**
* Create Workout Schedule
*
* POST {{url}}/schedule/workout/{{workout_id}}/
*/
export interface CreateWorkoutSchedule {
  detail: string;
}

/**
* Create Program Schedule
*
* POST {{url}}/schedule/program/{{program_id}}/
*/
export interface CreateProgramSchedule {
  detail: string;
}

/**
* Update Schedule
*
* PATCH {{url}}/schedule/workout/{{schedule_workout_id}}/
*/
export interface UpdateSchedule {
  detail: string;
}

/**
* Update Schedule including following workouts
*
* PATCH {{url}}/schedule/workout/{{schedule_workout_id}}/
*/
export interface UpdateScheduleIncludingFollowingWorkouts {
  detail: string;
}

/**
* Delete Schedule
*
* DELETE {{url}}/schedule/workout/{{schedule_workout_id}}/
*/
export interface DeleteSchedule {
  detail: string;
}

/**
* Create Comment (Workout) /comment/<group>/<object-id>/
*
* POST {{url}}/comment/workout/e9eb5f92-56c8-4dfc-983b-a29ec2fffae5/
*/
export interface CreateCommentWorkoutCommentGroupObjectID {
  id:            string;
  full_name:     FullName;
  profile_photo: string;
  created_at:    string;
  comment:       string;
  pinned:        boolean;
  total_likes:   number;
  total_replies: number;
  is_liked:      boolean;
  username:      string;
  replies:       any[];
  images:        CreateCommentWorkoutCommentGroupObjectIDImage[];
  videos:        CreateCommentWorkoutCommentGroupObjectIDVideo[];
  deleted:       boolean;
}

export interface CreateCommentWorkoutCommentGroupObjectIDImage {
  id:        string;
  image_url: string;
}

export interface CreateCommentWorkoutCommentGroupObjectIDVideo {
  id:            string;
  video_url:     string;
  thumbnail_url: string;
}

/**
* Create Challenge Comment /comment/<group>/<object-id>/
*
* POST {{url}}/comment/challenge/b8acd664-e805-4208-aae1-58e02061f91b/
*/
export interface CreateChallengeCommentCommentGroupObjectID {
  id:            string;
  full_name:     FullName;
  profile_photo: string;
  created_at:    string;
  comment:       string;
  pinned:        boolean;
  total_likes:   number;
  total_replies: number;
  is_liked:      boolean;
  username:      string;
  replies:       any[];
  images:        CreateCommentWorkoutCommentGroupObjectIDImage[];
  videos:        CreateCommentWorkoutCommentGroupObjectIDVideo[];
  deleted:       boolean;
}

/**
* Update Comment /comment/<comment-id>/
*
* PATCH {{url}}/comment/6a9c89c8-00f8-40a2-9797-1b45a2338dd3/
*/
export interface UpdateCommentCommentCommentID {
  id:      string;
  comment: string;
  videos?: UpdateCommentCommentCommentIDVideo[];
  images?: UpdateCommentCommentCommentIDImage[];
}

export interface UpdateCommentCommentCommentIDImage {
  id:    string;
  image: string;
}

export interface UpdateCommentCommentCommentIDVideo {
  id:        string;
  video:     string;
  thumbnail: string;
}

/**
* POST LIke a comment  comment/like/<comment_id>/
*
* POST {{url}}/comment/like/3e55aad6-1e2c-4ba2-b4cb-046a0767709f/
*/
export interface POSTLIKEACommentCommentLikeCommentID {
}

/**
* GET COMMENTS of PROGRAM {{url}}/comment/list/<group>/<content_item_id>/
*
* GET {{url}}/comment/list/workout/{{workout_id}}/
*/
export interface GETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID {
  count:    number;
  next:     null;
  previous: null;
  results:  ReplyElement[];
}

export interface ReplyElement {
  id:             string;
  full_name:      string;
  profile_photo:  null | string;
  created_at:     string;
  comment:        string;
  pinned?:        boolean;
  total_likes:    number;
  total_replies?: number;
  is_liked:       boolean;
  username?:      string;
  replies?:       ReplyElement[];
  images:         CreateCommentWorkoutCommentGroupObjectIDImage[];
  videos:         CreateCommentWorkoutCommentGroupObjectIDVideo[];
  tagged_user?:   null;
  deleted?:       boolean;
}

/**
* GET COMMENTS of Workout {{url}}/comment/list/<group>/<content_item_id>/
*
* GET {{url}}/comment/list/workout/11172947-c66e-4275-85eb-425b772abeb7/
*/
export interface GETCOMMENTSOfWorkoutURLCommentListGroupContentItemID {
  count:    number;
  next:     string;
  previous: null;
  results:  ReplyElement[];
}

/**
* GET REPLIES of the COMMENT {{url}}/comment/replies/<comment_id>/
*
* GET {{url}}/comment/replies/7e81368d-997a-4b21-81fa-865d8d419219/
*/
export interface GETREPLIESOfTheCOMMENTURLCommentRepliesCommentID {
  count:    number;
  next:     null;
  previous: null;
  results:  ReplyElement[];
}

/**
* Add Reply to Comment /comment/<comment-id>/reply/
*
* POST {{url}}/comment/f2dac736-92ce-43bb-9cb7-5dc43577d49c/reply/
*/
export interface AddReplyToCommentCommentCommentIDReply {
  id:            string;
  full_name:     FullName;
  profile_photo: string;
  created_at:    string;
  comment:       string;
  pinned:        boolean;
  total_likes:   number;
  is_liked:      boolean;
  username:      string;
  images:        any[];
  videos:        any[];
  deleted:       boolean;
  tagged_user:   null;
}

/**
* Add Reply to Comment  with TAGGED user
*
* POST {{url}}/comment/8c415800-c5a3-42d0-8456-c9562bcec5a1/reply/
*/
export interface AddReplyToCommentWithTAGGEDUser {
  id:          string;
  comment:     string;
  images:      any[];
  videos:      any[];
  tagged_user: TaggedUser;
}

export interface TaggedUser {
  id:        string;
  full_name: string;
}

/**
* GET signed URLs for images and videos (comment/<comment-id>/signed-urls/
*
* GET {{url}}/comment/77cd44df-b168-43ad-b86c-82c4510a7ad4/signed-urls/
*/
export interface GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls {
  images: GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrlsImage[];
  videos: GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrlsVideo[];
}

export interface GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrlsImage {
  image_upload_url: Back;
}

export interface GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrlsVideo {
  thumbnail_upload_url: Back;
  video_upload_url:     Back;
}

/**
* REPORT COMMENT/REPLY  /comment/report/<comment-id>/
*
* POST {{url}}/comment/report/bea0894e-6c21-4c20-9a2e-b3338174d2e4/
*/
export interface REPORTCOMMENTREPLYCommentReportCommentID {
  id?:          string;
  detail?:      string[];
  status_code?: number;
}

export interface GETPERFECTSTARTPrograms {
  id:          string;
  title:       string;
  subtitle:    string;
  description: string;
  duration:    null;
  thumbnail:   string;
}

/**
* GET STATISTICS
*
* GET {{url}}/home/statistics/
*/
export interface GetStatistics {
  statistics: GETUSERPROFILEStatistics;
}

/**
* GET HOME (combined data)
*
* GET {{url}}/home/all/
*/
export interface GETHOMECombinedData {
  statistics: GETUSERPROFILEStatistics;
  calendar:   string[];
  today:      NextWorkout;
  favourites: NextWorkout[];
  first_name: string;
}

/**
* GET HOME Challenge Stats
*
* GET {{url}}/home/challenge-stats/
*/
export interface GETHOMEChallengeStats {
  challenges: Challenge;
}

/**
* GET Welcome Screen Data
*
* GET {{url}}/welcome-screen/
*/
export interface GETWelcomeScreenData {
  welcome_screens: WelcomeScreen[];
}

export interface WelcomeScreen {
  image_url: string;
  title:     string;
  subtitle:  string;
}

/**
* GET Terms and Conditions
*
* GET {{url}}/terms/
*/
export interface GETTermsAndConditions {
  terms_and_conditions: string;
  privacy_policy:       string;
}

/**
* PAGINATION EXAMPLE
*
* GET {{url}}/comment/list/workout/6b7ca945-6885-4e1f-ae49-238544265c1b/?limit=2&page=2
*/
export interface PaginationExample {
  count:    number;
  next:     string;
  previous: string;
  results:  ReplyElement[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toCheckIfAGivenUsernameAlreadyExists(json: string): CheckIfAGivenUsernameAlreadyExists {
      return cast(JSON.parse(json), r("CheckIfAGivenUsernameAlreadyExists"));
  }

  public static checkIfAGivenUsernameAlreadyExistsToJson(value: CheckIfAGivenUsernameAlreadyExists): string {
      return JSON.stringify(uncast(value, r("CheckIfAGivenUsernameAlreadyExists")), null, 2);
  }

  public static toGetMyUSERDetailsUser(json: string): GetMyUSERDetailsUser {
      return cast(JSON.parse(json), r("GetMyUSERDetailsUser"));
  }

  public static getMyUSERDetailsUserToJson(value: GetMyUSERDetailsUser): string {
      return JSON.stringify(uncast(value, r("GetMyUSERDetailsUser")), null, 2);
  }

  public static toCreateUSERWithValidTokenID(json: string): CreateUSERWithValidTokenID {
      return cast(JSON.parse(json), r("CreateUSERWithValidTokenID"));
  }

  public static createUSERWithValidTokenIDToJson(value: CreateUSERWithValidTokenID): string {
      return JSON.stringify(uncast(value, r("CreateUSERWithValidTokenID")), null, 2);
  }

  public static toCreateUSERWithInvalidTokenID(json: string): CreateUSERWithInvalidTokenID {
      return cast(JSON.parse(json), r("CreateUSERWithInvalidTokenID"));
  }

  public static createUSERWithInvalidTokenIDToJson(value: CreateUSERWithInvalidTokenID): string {
      return JSON.stringify(uncast(value, r("CreateUSERWithInvalidTokenID")), null, 2);
  }

  public static toCreateUSERWithSameEmailAddress(json: string): CreateUSERWithSameEmailAddress {
      return cast(JSON.parse(json), r("CreateUSERWithSameEmailAddress"));
  }

  public static createUSERWithSameEmailAddressToJson(value: CreateUSERWithSameEmailAddress): string {
      return JSON.stringify(uncast(value, r("CreateUSERWithSameEmailAddress")), null, 2);
  }

  public static toUpdateUSERUpdateUsername(json: string): UpdateUSERUpdateUsername {
      return cast(JSON.parse(json), r("UpdateUSERUpdateUsername"));
  }

  public static updateUSERUpdateUsernameToJson(value: UpdateUSERUpdateUsername): string {
      return JSON.stringify(uncast(value, r("UpdateUSERUpdateUsername")), null, 2);
  }

  public static toUpdateUSERUpdateUsernameToNull(json: string): UpdateUSERUpdateUsernameToNull {
      return cast(JSON.parse(json), r("UpdateUSERUpdateUsernameToNull"));
  }

  public static updateUSERUpdateUsernameToNullToJson(value: UpdateUSERUpdateUsernameToNull): string {
      return JSON.stringify(uncast(value, r("UpdateUSERUpdateUsernameToNull")), null, 2);
  }

  public static toUpdateUSERUpdateUsernameToEmptyString(json: string): UpdateUSERUpdateUsernameToEmptyString {
      return cast(JSON.parse(json), r("UpdateUSERUpdateUsernameToEmptyString"));
  }

  public static updateUSERUpdateUsernameToEmptyStringToJson(value: UpdateUSERUpdateUsernameToEmptyString): string {
      return JSON.stringify(uncast(value, r("UpdateUSERUpdateUsernameToEmptyString")), null, 2);
  }

  public static toUpdateUSERUpdateProfilePhotoToNull(json: string): UpdateUSERUpdateProfilePhotoToNull {
      return cast(JSON.parse(json), r("UpdateUSERUpdateProfilePhotoToNull"));
  }

  public static updateUSERUpdateProfilePhotoToNullToJson(value: UpdateUSERUpdateProfilePhotoToNull): string {
      return JSON.stringify(uncast(value, r("UpdateUSERUpdateProfilePhotoToNull")), null, 2);
  }

  public static toProfilePhotoUploadPreSignedURL(json: string): ProfilePhotoUploadPreSignedURL {
      return cast(JSON.parse(json), r("ProfilePhotoUploadPreSignedURL"));
  }

  public static profilePhotoUploadPreSignedURLToJson(value: ProfilePhotoUploadPreSignedURL): string {
      return JSON.stringify(uncast(value, r("ProfilePhotoUploadPreSignedURL")), null, 2);
  }

  public static toGETPrivacySettings(json: string): GETPrivacySettings {
      return cast(JSON.parse(json), r("GETPrivacySettings"));
  }

  public static gETPrivacySettingsToJson(value: GETPrivacySettings): string {
      return JSON.stringify(uncast(value, r("GETPrivacySettings")), null, 2);
  }

  public static toPATCHPrivacySettings(json: string): PATCHPrivacySettings {
      return cast(JSON.parse(json), r("PATCHPrivacySettings"));
  }

  public static pATCHPrivacySettingsToJson(value: PATCHPrivacySettings): string {
      return JSON.stringify(uncast(value, r("PATCHPrivacySettings")), null, 2);
  }

  public static toGETUserBodyInfo(json: string): GETUserBodyInfo {
      return cast(JSON.parse(json), r("GETUserBodyInfo"));
  }

  public static gETUserBodyInfoToJson(value: GETUserBodyInfo): string {
      return JSON.stringify(uncast(value, r("GETUserBodyInfo")), null, 2);
  }

  public static toPOSTUserBodyInfo(json: string): POSTUserBodyInfo {
      return cast(JSON.parse(json), r("POSTUserBodyInfo"));
  }

  public static pOSTUserBodyInfoToJson(value: POSTUserBodyInfo): string {
      return JSON.stringify(uncast(value, r("POSTUserBodyInfo")), null, 2);
  }

  public static toPUTUserBodyInfo(json: string): PUTUserBodyInfo {
      return cast(JSON.parse(json), r("PUTUserBodyInfo"));
  }

  public static pUTUserBodyInfoToJson(value: PUTUserBodyInfo): string {
      return JSON.stringify(uncast(value, r("PUTUserBodyInfo")), null, 2);
  }

  public static toPOSTUserProgressPhoto(json: string): POSTUserProgressPhoto {
      return cast(JSON.parse(json), r("POSTUserProgressPhoto"));
  }

  public static pOSTUserProgressPhotoToJson(value: POSTUserProgressPhoto): string {
      return JSON.stringify(uncast(value, r("POSTUserProgressPhoto")), null, 2);
  }

  public static toGetListOfProgressPhotos(json: string): GetListOfProgressPhotos {
      return cast(JSON.parse(json), r("GetListOfProgressPhotos"));
  }

  public static getListOfProgressPhotosToJson(value: GetListOfProgressPhotos): string {
      return JSON.stringify(uncast(value, r("GetListOfProgressPhotos")), null, 2);
  }

  public static toGetOtherUserProgressPhotosUserUserIDProgressPhoto(json: string): GetOtherUserProgressPhotosUserUserIDProgressPhoto {
      return cast(JSON.parse(json), r("GetOtherUserProgressPhotosUserUserIDProgressPhoto"));
  }

  public static getOtherUserProgressPhotosUserUserIDProgressPhotoToJson(value: GetOtherUserProgressPhotosUserUserIDProgressPhoto): string {
      return JSON.stringify(uncast(value, r("GetOtherUserProgressPhotosUserUserIDProgressPhoto")), null, 2);
  }

  public static toSaveUpdateTheProgressPhotos(json: string): SaveUpdateTheProgressPhotos {
      return cast(JSON.parse(json), r("SaveUpdateTheProgressPhotos"));
  }

  public static saveUpdateTheProgressPhotosToJson(value: SaveUpdateTheProgressPhotos): string {
      return JSON.stringify(uncast(value, r("SaveUpdateTheProgressPhotos")), null, 2);
  }

  public static toGetUserProfile(json: string): GetUserProfile {
      return cast(JSON.parse(json), r("GetUserProfile"));
  }

  public static getUserProfileToJson(value: GetUserProfile): string {
      return JSON.stringify(uncast(value, r("GetUserProfile")), null, 2);
  }

  public static toGetOtherUserProfile(json: string): GetOtherUserProfile {
      return cast(JSON.parse(json), r("GetOtherUserProfile"));
  }

  public static getOtherUserProfileToJson(value: GetOtherUserProfile): string {
      return JSON.stringify(uncast(value, r("GetOtherUserProfile")), null, 2);
  }

  public static toRetrieveWORKOUTVideoTags(json: string): RetrieveWORKOUTVideoTags {
      return cast(JSON.parse(json), r("RetrieveWORKOUTVideoTags"));
  }

  public static retrieveWORKOUTVideoTagsToJson(value: RetrieveWORKOUTVideoTags): string {
      return JSON.stringify(uncast(value, r("RetrieveWORKOUTVideoTags")), null, 2);
  }

  public static toRetrieveBLOGTags(json: string): RetrieveBLOGTags {
      return cast(JSON.parse(json), r("RetrieveBLOGTags"));
  }

  public static retrieveBLOGTagsToJson(value: RetrieveBLOGTags): string {
      return JSON.stringify(uncast(value, r("RetrieveBLOGTags")), null, 2);
  }

  public static toRetrieveALLTags(json: string): RetrieveALLTags {
      return cast(JSON.parse(json), r("RetrieveALLTags"));
  }

  public static retrieveALLTagsToJson(value: RetrieveALLTags): string {
      return JSON.stringify(uncast(value, r("RetrieveALLTags")), null, 2);
  }

  public static toGETArticleTags(json: string): GETArticleTags {
      return cast(JSON.parse(json), r("GETArticleTags"));
  }

  public static gETArticleTagsToJson(value: GETArticleTags): string {
      return JSON.stringify(uncast(value, r("GETArticleTags")), null, 2);
  }

  public static toRetrieveVideosOfALLTypesForDiscovery(json: string): RetrieveVideosOfALLTypesForDiscovery {
      return cast(JSON.parse(json), r("RetrieveVideosOfALLTypesForDiscovery"));
  }

  public static retrieveVideosOfALLTypesForDiscoveryToJson(value: RetrieveVideosOfALLTypesForDiscovery): string {
      return JSON.stringify(uncast(value, r("RetrieveVideosOfALLTypesForDiscovery")), null, 2);
  }

  public static toRetrieveVideosOfWORKOUTTypeForDiscovery(json: string): RetrieveVideosOfWORKOUTTypeForDiscovery {
      return cast(JSON.parse(json), r("RetrieveVideosOfWORKOUTTypeForDiscovery"));
  }

  public static retrieveVideosOfWORKOUTTypeForDiscoveryToJson(value: RetrieveVideosOfWORKOUTTypeForDiscovery): string {
      return JSON.stringify(uncast(value, r("RetrieveVideosOfWORKOUTTypeForDiscovery")), null, 2);
  }

  public static toRetrieveVideosOfCHALLENGETypeForDiscovery(json: string): RetrieveVideosOfCHALLENGETypeForDiscovery {
      return cast(JSON.parse(json), r("RetrieveVideosOfCHALLENGETypeForDiscovery"));
  }

  public static retrieveVideosOfCHALLENGETypeForDiscoveryToJson(value: RetrieveVideosOfCHALLENGETypeForDiscovery): string {
      return JSON.stringify(uncast(value, r("RetrieveVideosOfCHALLENGETypeForDiscovery")), null, 2);
  }

  public static toRetrieveVideosOfHOWTOTypeForDiscovery(json: string): RetrieveVideosOfHOWTOTypeForDiscovery {
      return cast(JSON.parse(json), r("RetrieveVideosOfHOWTOTypeForDiscovery"));
  }

  public static retrieveVideosOfHOWTOTypeForDiscoveryToJson(value: RetrieveVideosOfHOWTOTypeForDiscovery): string {
      return JSON.stringify(uncast(value, r("RetrieveVideosOfHOWTOTypeForDiscovery")), null, 2);
  }

  public static toRetrieveVideosOfPROGRAMTypeForDiscovery(json: string): RetrieveVideosOfPROGRAMTypeForDiscovery {
      return cast(JSON.parse(json), r("RetrieveVideosOfPROGRAMTypeForDiscovery"));
  }

  public static retrieveVideosOfPROGRAMTypeForDiscoveryToJson(value: RetrieveVideosOfPROGRAMTypeForDiscovery): string {
      return JSON.stringify(uncast(value, r("RetrieveVideosOfPROGRAMTypeForDiscovery")), null, 2);
  }

  public static toRetrievePostsOfRECIPETypeForDiscovery(json: string): RetrievePostsOfRECIPETypeForDiscovery {
      return cast(JSON.parse(json), r("RetrievePostsOfRECIPETypeForDiscovery"));
  }

  public static retrievePostsOfRECIPETypeForDiscoveryToJson(value: RetrievePostsOfRECIPETypeForDiscovery): string {
      return JSON.stringify(uncast(value, r("RetrievePostsOfRECIPETypeForDiscovery")), null, 2);
  }

  public static toRetrievePostsOfARTICLETypeForDiscovery(json: string): RetrievePostsOfARTICLETypeForDiscovery {
      return cast(JSON.parse(json), r("RetrievePostsOfARTICLETypeForDiscovery"));
  }

  public static retrievePostsOfARTICLETypeForDiscoveryToJson(value: RetrievePostsOfARTICLETypeForDiscovery): string {
      return JSON.stringify(uncast(value, r("RetrievePostsOfARTICLETypeForDiscovery")), null, 2);
  }

  public static toFilterALLVideosByTags(json: string): FilterALLVideosByTags {
      return cast(JSON.parse(json), r("FilterALLVideosByTags"));
  }

  public static filterALLVideosByTagsToJson(value: FilterALLVideosByTags): string {
      return JSON.stringify(uncast(value, r("FilterALLVideosByTags")), null, 2);
  }

  public static toFilterWORKOUTVideosByTags(json: string): FilterWORKOUTVideosByTags {
      return cast(JSON.parse(json), r("FilterWORKOUTVideosByTags"));
  }

  public static filterWORKOUTVideosByTagsToJson(value: FilterWORKOUTVideosByTags): string {
      return JSON.stringify(uncast(value, r("FilterWORKOUTVideosByTags")), null, 2);
  }

  public static toFilterCHALLENGEVideosByTags(json: string): FilterCHALLENGEVideosByTags {
      return cast(JSON.parse(json), r("FilterCHALLENGEVideosByTags"));
  }

  public static filterCHALLENGEVideosByTagsToJson(value: FilterCHALLENGEVideosByTags): string {
      return JSON.stringify(uncast(value, r("FilterCHALLENGEVideosByTags")), null, 2);
  }

  public static toFilterPROGRAMSByTags(json: string): FilterPROGRAMSByTags {
      return cast(JSON.parse(json), r("FilterPROGRAMSByTags"));
  }

  public static filterPROGRAMSByTagsToJson(value: FilterPROGRAMSByTags): string {
      return JSON.stringify(uncast(value, r("FilterPROGRAMSByTags")), null, 2);
  }

  public static toFilterHOWTOByTags(json: string): FilterHOWTOByTags {
      return cast(JSON.parse(json), r("FilterHOWTOByTags"));
  }

  public static filterHOWTOByTagsToJson(value: FilterHOWTOByTags): string {
      return JSON.stringify(uncast(value, r("FilterHOWTOByTags")), null, 2);
  }

  public static toFilterARTICLESByTags(json: string): FilterARTICLESByTags {
      return cast(JSON.parse(json), r("FilterARTICLESByTags"));
  }

  public static filterARTICLESByTagsToJson(value: FilterARTICLESByTags): string {
      return JSON.stringify(uncast(value, r("FilterARTICLESByTags")), null, 2);
  }

  public static toFilterRECIPESByTags(json: string): FilterRECIPESByTags {
      return cast(JSON.parse(json), r("FilterRECIPESByTags"));
  }

  public static filterRECIPESByTagsToJson(value: FilterRECIPESByTags): string {
      return JSON.stringify(uncast(value, r("FilterRECIPESByTags")), null, 2);
  }

  public static toRetrieveASingleWORKOUTVideo(json: string): RetrieveASingleWORKOUTVideo {
      return cast(JSON.parse(json), r("RetrieveASingleWORKOUTVideo"));
  }

  public static retrieveASingleWORKOUTVideoToJson(value: RetrieveASingleWORKOUTVideo): string {
      return JSON.stringify(uncast(value, r("RetrieveASingleWORKOUTVideo")), null, 2);
  }

  public static toRetrieveASingleCHALLENGEVideo(json: string): RetrieveASingleCHALLENGEVideo {
      return cast(JSON.parse(json), r("RetrieveASingleCHALLENGEVideo"));
  }

  public static retrieveASingleCHALLENGEVideoToJson(value: RetrieveASingleCHALLENGEVideo): string {
      return JSON.stringify(uncast(value, r("RetrieveASingleCHALLENGEVideo")), null, 2);
  }

  public static toRetrieveASingleHOWTOVideo(json: string): RetrieveASingleHOWTOVideo {
      return cast(JSON.parse(json), r("RetrieveASingleHOWTOVideo"));
  }

  public static retrieveASingleHOWTOVideoToJson(value: RetrieveASingleHOWTOVideo): string {
      return JSON.stringify(uncast(value, r("RetrieveASingleHOWTOVideo")), null, 2);
  }

  public static toRetrieveASingleRECIPE(json: string): RetrieveASingleRECIPE {
      return cast(JSON.parse(json), r("RetrieveASingleRECIPE"));
  }

  public static retrieveASingleRECIPEToJson(value: RetrieveASingleRECIPE): string {
      return JSON.stringify(uncast(value, r("RetrieveASingleRECIPE")), null, 2);
  }

  public static toRetrieveASingleARTICLE(json: string): RetrieveASingleARTICLE {
      return cast(JSON.parse(json), r("RetrieveASingleARTICLE"));
  }

  public static retrieveASingleARTICLEToJson(value: RetrieveASingleARTICLE): string {
      return JSON.stringify(uncast(value, r("RetrieveASingleARTICLE")), null, 2);
  }

  public static toRetrieveASinglePROGRAMAlongsideWithAssociatedVideos(json: string): RetrieveASinglePROGRAMAlongsideWithAssociatedVideos {
      return cast(JSON.parse(json), r("RetrieveASinglePROGRAMAlongsideWithAssociatedVideos"));
  }

  public static retrieveASinglePROGRAMAlongsideWithAssociatedVideosToJson(value: RetrieveASinglePROGRAMAlongsideWithAssociatedVideos): string {
      return JSON.stringify(uncast(value, r("RetrieveASinglePROGRAMAlongsideWithAssociatedVideos")), null, 2);
  }

  public static toCREATEANoteForWORKOUTVideo(json: string): CREATEANoteForWORKOUTVideo {
      return cast(JSON.parse(json), r("CREATEANoteForWORKOUTVideo"));
  }

  public static cREATEANoteForWORKOUTVideoToJson(value: CREATEANoteForWORKOUTVideo): string {
      return JSON.stringify(uncast(value, r("CREATEANoteForWORKOUTVideo")), null, 2);
  }

  public static toCREATEANoteForCHALLENGEVideo(json: string): CREATEANoteForCHALLENGEVideo {
      return cast(JSON.parse(json), r("CREATEANoteForCHALLENGEVideo"));
  }

  public static cREATEANoteForCHALLENGEVideoToJson(value: CREATEANoteForCHALLENGEVideo): string {
      return JSON.stringify(uncast(value, r("CREATEANoteForCHALLENGEVideo")), null, 2);
  }

  public static toCREATEANoteForHOWTOVideo(json: string): CREATEANoteForHOWTOVideo {
      return cast(JSON.parse(json), r("CREATEANoteForHOWTOVideo"));
  }

  public static cREATEANoteForHOWTOVideoToJson(value: CREATEANoteForHOWTOVideo): string {
      return JSON.stringify(uncast(value, r("CREATEANoteForHOWTOVideo")), null, 2);
  }

  public static toCREATEANoteForPROGRAM(json: string): CREATEANoteForPROGRAM {
      return cast(JSON.parse(json), r("CREATEANoteForPROGRAM"));
  }

  public static cREATEANoteForPROGRAMToJson(value: CREATEANoteForPROGRAM): string {
      return JSON.stringify(uncast(value, r("CREATEANoteForPROGRAM")), null, 2);
  }

  public static toUpdateNoteOnAGivenVideo(json: string): UpdateNoteOnAGivenVideo {
      return cast(JSON.parse(json), r("UpdateNoteOnAGivenVideo"));
  }

  public static updateNoteOnAGivenVideoToJson(value: UpdateNoteOnAGivenVideo): string {
      return JSON.stringify(uncast(value, r("UpdateNoteOnAGivenVideo")), null, 2);
  }

  public static toUPDATEStreakAndLogWatchedVideoWORKOUT(json: string): UPDATEStreakAndLogWatchedVideoWORKOUT {
      return cast(JSON.parse(json), r("UPDATEStreakAndLogWatchedVideoWORKOUT"));
  }

  public static uPDATEStreakAndLogWatchedVideoWORKOUTToJson(value: UPDATEStreakAndLogWatchedVideoWORKOUT): string {
      return JSON.stringify(uncast(value, r("UPDATEStreakAndLogWatchedVideoWORKOUT")), null, 2);
  }

  public static toUPDATEStreakAndLogWatchedVideoCHALLENGE(json: string): UPDATEStreakAndLogWatchedVideoCHALLENGE {
      return cast(JSON.parse(json), r("UPDATEStreakAndLogWatchedVideoCHALLENGE"));
  }

  public static uPDATEStreakAndLogWatchedVideoCHALLENGEToJson(value: UPDATEStreakAndLogWatchedVideoCHALLENGE): string {
      return JSON.stringify(uncast(value, r("UPDATEStreakAndLogWatchedVideoCHALLENGE")), null, 2);
  }

  public static toGETParticipantsOfAWORKOUT(json: string): GETParticipantsOfAWORKOUT {
      return cast(JSON.parse(json), r("GETParticipantsOfAWORKOUT"));
  }

  public static gETParticipantsOfAWORKOUTToJson(value: GETParticipantsOfAWORKOUT): string {
      return JSON.stringify(uncast(value, r("GETParticipantsOfAWORKOUT")), null, 2);
  }

  public static toGETParticipantsOfACHALLENGE(json: string): GETParticipantsOfACHALLENGE {
      return cast(JSON.parse(json), r("GETParticipantsOfACHALLENGE"));
  }

  public static gETParticipantsOfACHALLENGEToJson(value: GETParticipantsOfACHALLENGE): string {
      return JSON.stringify(uncast(value, r("GETParticipantsOfACHALLENGE")), null, 2);
  }

  public static toGETParticipantsOfAHOWTO(json: string): GETParticipantsOfAHOWTO {
      return cast(JSON.parse(json), r("GETParticipantsOfAHOWTO"));
  }

  public static gETParticipantsOfAHOWTOToJson(value: GETParticipantsOfAHOWTO): string {
      return JSON.stringify(uncast(value, r("GETParticipantsOfAHOWTO")), null, 2);
  }

  public static toGETParticipantsOfAPROGRAM(json: string): GETParticipantsOfAPROGRAM {
      return cast(JSON.parse(json), r("GETParticipantsOfAPROGRAM"));
  }

  public static gETParticipantsOfAPROGRAMToJson(value: GETParticipantsOfAPROGRAM): string {
      return JSON.stringify(uncast(value, r("GETParticipantsOfAPROGRAM")), null, 2);
  }

  public static toSearchByKeywordInTheTitleInAllModelsNonExistentSearch(json: string): SearchByKeywordInTheTitleInAllModelsNonExistentSearch {
      return cast(JSON.parse(json), r("SearchByKeywordInTheTitleInAllModelsNonExistentSearch"));
  }

  public static searchByKeywordInTheTitleInAllModelsNonExistentSearchToJson(value: SearchByKeywordInTheTitleInAllModelsNonExistentSearch): string {
      return JSON.stringify(uncast(value, r("SearchByKeywordInTheTitleInAllModelsNonExistentSearch")), null, 2);
  }

  public static toSearchByKeywordInTheTitleInAllModelsNonExistentSearchCopy(json: string): SearchByKeywordInTheTitleInAllModelsNonExistentSearchCopy {
      return cast(JSON.parse(json), r("SearchByKeywordInTheTitleInAllModelsNonExistentSearchCopy"));
  }

  public static searchByKeywordInTheTitleInAllModelsNonExistentSearchCopyToJson(value: SearchByKeywordInTheTitleInAllModelsNonExistentSearchCopy): string {
      return JSON.stringify(uncast(value, r("SearchByKeywordInTheTitleInAllModelsNonExistentSearchCopy")), null, 2);
  }

  public static toSearchByKeywordInTheTitleInAllModelsAll(json: string): SearchByKeywordInTheTitleInAllModelsAll {
      return cast(JSON.parse(json), r("SearchByKeywordInTheTitleInAllModelsAll"));
  }

  public static searchByKeywordInTheTitleInAllModelsAllToJson(value: SearchByKeywordInTheTitleInAllModelsAll): string {
      return JSON.stringify(uncast(value, r("SearchByKeywordInTheTitleInAllModelsAll")), null, 2);
  }

  public static toSearchByKeywordInTheTitleOfAGivenGroupWorkout(json: string): SearchByKeywordInTheTitleOfAGivenGroupWorkout {
      return cast(JSON.parse(json), r("SearchByKeywordInTheTitleOfAGivenGroupWorkout"));
  }

  public static searchByKeywordInTheTitleOfAGivenGroupWorkoutToJson(value: SearchByKeywordInTheTitleOfAGivenGroupWorkout): string {
      return JSON.stringify(uncast(value, r("SearchByKeywordInTheTitleOfAGivenGroupWorkout")), null, 2);
  }

  public static toSearchByKeywordInTheTitleOfAGivenGroupPrograms(json: string): SearchByKeywordInTheTitleOfAGivenGroupPrograms {
      return cast(JSON.parse(json), r("SearchByKeywordInTheTitleOfAGivenGroupPrograms"));
  }

  public static searchByKeywordInTheTitleOfAGivenGroupProgramsToJson(value: SearchByKeywordInTheTitleOfAGivenGroupPrograms): string {
      return JSON.stringify(uncast(value, r("SearchByKeywordInTheTitleOfAGivenGroupPrograms")), null, 2);
  }

  public static toSearchByKeywordInTheTitleOfAGivenGroupProgressTests(json: string): SearchByKeywordInTheTitleOfAGivenGroupProgressTests {
      return cast(JSON.parse(json), r("SearchByKeywordInTheTitleOfAGivenGroupProgressTests"));
  }

  public static searchByKeywordInTheTitleOfAGivenGroupProgressTestsToJson(value: SearchByKeywordInTheTitleOfAGivenGroupProgressTests): string {
      return JSON.stringify(uncast(value, r("SearchByKeywordInTheTitleOfAGivenGroupProgressTests")), null, 2);
  }

  public static toSearchByKeywordInTheTitleOfAGivenGroupRecipes(json: string): SearchByKeywordInTheTitleOfAGivenGroupRecipes {
      return cast(JSON.parse(json), r("SearchByKeywordInTheTitleOfAGivenGroupRecipes"));
  }

  public static searchByKeywordInTheTitleOfAGivenGroupRecipesToJson(value: SearchByKeywordInTheTitleOfAGivenGroupRecipes): string {
      return JSON.stringify(uncast(value, r("SearchByKeywordInTheTitleOfAGivenGroupRecipes")), null, 2);
  }

  public static toSearchByKeywordInTheTitleOfAGivenGroupArticles(json: string): SearchByKeywordInTheTitleOfAGivenGroupArticles {
      return cast(JSON.parse(json), r("SearchByKeywordInTheTitleOfAGivenGroupArticles"));
  }

  public static searchByKeywordInTheTitleOfAGivenGroupArticlesToJson(value: SearchByKeywordInTheTitleOfAGivenGroupArticles): string {
      return JSON.stringify(uncast(value, r("SearchByKeywordInTheTitleOfAGivenGroupArticles")), null, 2);
  }

  public static toSuccessfullySaveChallengeResult(json: string): SuccessfullySaveChallengeResult {
      return cast(JSON.parse(json), r("SuccessfullySaveChallengeResult"));
  }

  public static successfullySaveChallengeResultToJson(value: SuccessfullySaveChallengeResult): string {
      return JSON.stringify(uncast(value, r("SuccessfullySaveChallengeResult")), null, 2);
  }

  public static toSaveChallengeResultChallengeIDIsNull(json: string): SaveChallengeResultChallengeIDIsNull {
      return cast(JSON.parse(json), r("SaveChallengeResultChallengeIDIsNull"));
  }

  public static saveChallengeResultChallengeIDIsNullToJson(value: SaveChallengeResultChallengeIDIsNull): string {
      return JSON.stringify(uncast(value, r("SaveChallengeResultChallengeIDIsNull")), null, 2);
  }

  public static toSaveChallengeResultChallengeIDIsEmpty(json: string): SaveChallengeResultChallengeIDIsEmpty {
      return cast(JSON.parse(json), r("SaveChallengeResultChallengeIDIsEmpty"));
  }

  public static saveChallengeResultChallengeIDIsEmptyToJson(value: SaveChallengeResultChallengeIDIsEmpty): string {
      return JSON.stringify(uncast(value, r("SaveChallengeResultChallengeIDIsEmpty")), null, 2);
  }

  public static toSaveChallengeResultResultIsNull(json: string): SaveChallengeResultResultIsNull {
      return cast(JSON.parse(json), r("SaveChallengeResultResultIsNull"));
  }

  public static saveChallengeResultResultIsNullToJson(value: SaveChallengeResultResultIsNull): string {
      return JSON.stringify(uncast(value, r("SaveChallengeResultResultIsNull")), null, 2);
  }

  public static toSaveChallengeResultResultIsEmpty(json: string): SaveChallengeResultResultIsEmpty {
      return cast(JSON.parse(json), r("SaveChallengeResultResultIsEmpty"));
  }

  public static saveChallengeResultResultIsEmptyToJson(value: SaveChallengeResultResultIsEmpty): string {
      return JSON.stringify(uncast(value, r("SaveChallengeResultResultIsEmpty")), null, 2);
  }

  public static toSaveChallengeResultResultIsNegativeValue(json: string): SaveChallengeResultResultIsNegativeValue {
      return cast(JSON.parse(json), r("SaveChallengeResultResultIsNegativeValue"));
  }

  public static saveChallengeResultResultIsNegativeValueToJson(value: SaveChallengeResultResultIsNegativeValue): string {
      return JSON.stringify(uncast(value, r("SaveChallengeResultResultIsNegativeValue")), null, 2);
  }

  public static toSaveChallengeResultWrongChallengeID(json: string): SaveChallengeResultWrongChallengeID {
      return cast(JSON.parse(json), r("SaveChallengeResultWrongChallengeID"));
  }

  public static saveChallengeResultWrongChallengeIDToJson(value: SaveChallengeResultWrongChallengeID): string {
      return JSON.stringify(uncast(value, r("SaveChallengeResultWrongChallengeID")), null, 2);
  }

  public static toGETWorkoutHistoryOfUser(json: string): GETWorkoutHistoryOfUser {
      return cast(JSON.parse(json), r("GETWorkoutHistoryOfUser"));
  }

  public static gETWorkoutHistoryOfUserToJson(value: GETWorkoutHistoryOfUser): string {
      return JSON.stringify(uncast(value, r("GETWorkoutHistoryOfUser")), null, 2);
  }

  public static toFetchHLSURLsForAWorkout(json: string): FetchHLSURLsForAWorkout {
      return cast(JSON.parse(json), r("FetchHLSURLsForAWorkout"));
  }

  public static fetchHLSURLsForAWorkoutToJson(value: FetchHLSURLsForAWorkout): string {
      return JSON.stringify(uncast(value, r("FetchHLSURLsForAWorkout")), null, 2);
  }

  public static toFetchHLSURLForAChallenge(json: string): FetchHLSURLForAChallenge {
      return cast(JSON.parse(json), r("FetchHLSURLForAChallenge"));
  }

  public static fetchHLSURLForAChallengeToJson(value: FetchHLSURLForAChallenge): string {
      return JSON.stringify(uncast(value, r("FetchHLSURLForAChallenge")), null, 2);
  }

  public static toFetchHLSURLForAHowTo(json: string): FetchHLSURLForAHowTo {
      return cast(JSON.parse(json), r("FetchHLSURLForAHowTo"));
  }

  public static fetchHLSURLForAHowToToJson(value: FetchHLSURLForAHowTo): string {
      return JSON.stringify(uncast(value, r("FetchHLSURLForAHowTo")), null, 2);
  }

  public static toGETXploreContentContentXploreAll(json: string): GETXploreContentContentXploreAll {
      return cast(JSON.parse(json), r("GETXploreContentContentXploreAll"));
  }

  public static gETXploreContentContentXploreAllToJson(value: GETXploreContentContentXploreAll): string {
      return JSON.stringify(uncast(value, r("GETXploreContentContentXploreAll")), null, 2);
  }

  public static toGETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest(json: string): GETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest {
      return cast(JSON.parse(json), r("GETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest"));
  }

  public static gETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatestToJson(value: GETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest): string {
      return JSON.stringify(uncast(value, r("GETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest")), null, 2);
  }

  public static toGetFavouriteChallengesForUser(json: string): GetFavouriteChallengesForUser {
      return cast(JSON.parse(json), r("GetFavouriteChallengesForUser"));
  }

  public static getFavouriteChallengesForUserToJson(value: GetFavouriteChallengesForUser): string {
      return JSON.stringify(uncast(value, r("GetFavouriteChallengesForUser")), null, 2);
  }

  public static toGetFavouriteHowToForUser(json: string): GetFavouriteHowToForUser {
      return cast(JSON.parse(json), r("GetFavouriteHowToForUser"));
  }

  public static getFavouriteHowToForUserToJson(value: GetFavouriteHowToForUser): string {
      return JSON.stringify(uncast(value, r("GetFavouriteHowToForUser")), null, 2);
  }

  public static toGetFavouriteProgramsForUser(json: string): GetFavouriteProgramsForUser {
      return cast(JSON.parse(json), r("GetFavouriteProgramsForUser"));
  }

  public static getFavouriteProgramsForUserToJson(value: GetFavouriteProgramsForUser): string {
      return JSON.stringify(uncast(value, r("GetFavouriteProgramsForUser")), null, 2);
  }

  public static toGetFavouriteRecipesForUser(json: string): GetFavouriteRecipesForUser {
      return cast(JSON.parse(json), r("GetFavouriteRecipesForUser"));
  }

  public static getFavouriteRecipesForUserToJson(value: GetFavouriteRecipesForUser): string {
      return JSON.stringify(uncast(value, r("GetFavouriteRecipesForUser")), null, 2);
  }

  public static toGetFavouriteArticlesForUser(json: string): GetFavouriteArticlesForUser {
      return cast(JSON.parse(json), r("GetFavouriteArticlesForUser"));
  }

  public static getFavouriteArticlesForUserToJson(value: GetFavouriteArticlesForUser): string {
      return JSON.stringify(uncast(value, r("GetFavouriteArticlesForUser")), null, 2);
  }

  public static toGetFavouriteWorkoutsForUser(json: string): GetFavouriteWorkoutsForUser {
      return cast(JSON.parse(json), r("GetFavouriteWorkoutsForUser"));
  }

  public static getFavouriteWorkoutsForUserToJson(value: GetFavouriteWorkoutsForUser): string {
      return JSON.stringify(uncast(value, r("GetFavouriteWorkoutsForUser")), null, 2);
  }

  public static toMarkWorkoutAsFavourite(json: string): MarkWorkoutAsFavourite {
      return cast(JSON.parse(json), r("MarkWorkoutAsFavourite"));
  }

  public static markWorkoutAsFavouriteToJson(value: MarkWorkoutAsFavourite): string {
      return JSON.stringify(uncast(value, r("MarkWorkoutAsFavourite")), null, 2);
  }

  public static toCheckUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved(json: string): CheckUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved {
      return cast(JSON.parse(json), r("CheckUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved"));
  }

  public static checkUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemovedToJson(value: CheckUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved): string {
      return JSON.stringify(uncast(value, r("CheckUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved")), null, 2);
  }

  public static toMarkArticleAsFavourite(json: string): MarkArticleAsFavourite {
      return cast(JSON.parse(json), r("MarkArticleAsFavourite"));
  }

  public static markArticleAsFavouriteToJson(value: MarkArticleAsFavourite): string {
      return JSON.stringify(uncast(value, r("MarkArticleAsFavourite")), null, 2);
  }

  public static toCheckUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved(json: string): CheckUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved {
      return cast(JSON.parse(json), r("CheckUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved"));
  }

  public static checkUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemovedToJson(value: CheckUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved): string {
      return JSON.stringify(uncast(value, r("CheckUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved")), null, 2);
  }

  public static toMarkRecipesAsFavourite(json: string): MarkRecipesAsFavourite {
      return cast(JSON.parse(json), r("MarkRecipesAsFavourite"));
  }

  public static markRecipesAsFavouriteToJson(value: MarkRecipesAsFavourite): string {
      return JSON.stringify(uncast(value, r("MarkRecipesAsFavourite")), null, 2);
  }

  public static toCheckUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved(json: string): CheckUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved {
      return cast(JSON.parse(json), r("CheckUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved"));
  }

  public static checkUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemovedToJson(value: CheckUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved): string {
      return JSON.stringify(uncast(value, r("CheckUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved")), null, 2);
  }

  public static toMarkProgramAsFavourite(json: string): MarkProgramAsFavourite {
      return cast(JSON.parse(json), r("MarkProgramAsFavourite"));
  }

  public static markProgramAsFavouriteToJson(value: MarkProgramAsFavourite): string {
      return JSON.stringify(uncast(value, r("MarkProgramAsFavourite")), null, 2);
  }

  public static toCheckUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved(json: string): CheckUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved {
      return cast(JSON.parse(json), r("CheckUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved"));
  }

  public static checkUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemovedToJson(value: CheckUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved): string {
      return JSON.stringify(uncast(value, r("CheckUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved")), null, 2);
  }

  public static toMarkHowToAsFavourite(json: string): MarkHowToAsFavourite {
      return cast(JSON.parse(json), r("MarkHowToAsFavourite"));
  }

  public static markHowToAsFavouriteToJson(value: MarkHowToAsFavourite): string {
      return JSON.stringify(uncast(value, r("MarkHowToAsFavourite")), null, 2);
  }

  public static toCheckUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved(json: string): CheckUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved {
      return cast(JSON.parse(json), r("CheckUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved"));
  }

  public static checkUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemovedToJson(value: CheckUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved): string {
      return JSON.stringify(uncast(value, r("CheckUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved")), null, 2);
  }

  public static toMarkChallengeAsFavourite(json: string): MarkChallengeAsFavourite {
      return cast(JSON.parse(json), r("MarkChallengeAsFavourite"));
  }

  public static markChallengeAsFavouriteToJson(value: MarkChallengeAsFavourite): string {
      return JSON.stringify(uncast(value, r("MarkChallengeAsFavourite")), null, 2);
  }

  public static toCheckUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved(json: string): CheckUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved {
      return cast(JSON.parse(json), r("CheckUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved"));
  }

  public static checkUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemovedToJson(value: CheckUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved): string {
      return JSON.stringify(uncast(value, r("CheckUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved")), null, 2);
  }

  public static toGETALLSCHEDULEDatesWithWorkoutInfo(json: string): GETALLSCHEDULEDatesWithWorkoutInfo {
      return cast(JSON.parse(json), r("GETALLSCHEDULEDatesWithWorkoutInfo"));
  }

  public static gETALLSCHEDULEDatesWithWorkoutInfoToJson(value: GETALLSCHEDULEDatesWithWorkoutInfo): string {
      return JSON.stringify(uncast(value, r("GETALLSCHEDULEDatesWithWorkoutInfo")), null, 2);
  }

  public static toGETALLOnlyDATES(json: string): string[] {
      return cast(JSON.parse(json), a(""));
  }

  public static gETALLOnlyDATESToJson(value: string[]): string {
      return JSON.stringify(uncast(value, a("")), null, 2);
  }

  public static toGETDATESForATIMEPeriod(json: string): string[] {
      return cast(JSON.parse(json), a(""));
  }

  public static gETDATESForATIMEPeriodToJson(value: string[]): string {
      return JSON.stringify(uncast(value, a("")), null, 2);
  }

  public static toGETForASpecificDATE(json: string): string[] {
      return cast(JSON.parse(json), a(""));
  }

  public static gETForASpecificDATEToJson(value: string[]): string {
      return JSON.stringify(uncast(value, a("")), null, 2);
  }

  public static toCreateWorkoutSchedule(json: string): CreateWorkoutSchedule {
      return cast(JSON.parse(json), r("CreateWorkoutSchedule"));
  }

  public static createWorkoutScheduleToJson(value: CreateWorkoutSchedule): string {
      return JSON.stringify(uncast(value, r("CreateWorkoutSchedule")), null, 2);
  }

  public static toCreateProgramSchedule(json: string): CreateProgramSchedule {
      return cast(JSON.parse(json), r("CreateProgramSchedule"));
  }

  public static createProgramScheduleToJson(value: CreateProgramSchedule): string {
      return JSON.stringify(uncast(value, r("CreateProgramSchedule")), null, 2);
  }

  public static toUpdateSchedule(json: string): UpdateSchedule {
      return cast(JSON.parse(json), r("UpdateSchedule"));
  }

  public static updateScheduleToJson(value: UpdateSchedule): string {
      return JSON.stringify(uncast(value, r("UpdateSchedule")), null, 2);
  }

  public static toUpdateScheduleIncludingFollowingWorkouts(json: string): UpdateScheduleIncludingFollowingWorkouts {
      return cast(JSON.parse(json), r("UpdateScheduleIncludingFollowingWorkouts"));
  }

  public static updateScheduleIncludingFollowingWorkoutsToJson(value: UpdateScheduleIncludingFollowingWorkouts): string {
      return JSON.stringify(uncast(value, r("UpdateScheduleIncludingFollowingWorkouts")), null, 2);
  }

  public static toDeleteSchedule(json: string): DeleteSchedule {
      return cast(JSON.parse(json), r("DeleteSchedule"));
  }

  public static deleteScheduleToJson(value: DeleteSchedule): string {
      return JSON.stringify(uncast(value, r("DeleteSchedule")), null, 2);
  }

  public static toCreateCommentWorkoutCommentGroupObjectID(json: string): CreateCommentWorkoutCommentGroupObjectID {
      return cast(JSON.parse(json), r("CreateCommentWorkoutCommentGroupObjectID"));
  }

  public static createCommentWorkoutCommentGroupObjectIDToJson(value: CreateCommentWorkoutCommentGroupObjectID): string {
      return JSON.stringify(uncast(value, r("CreateCommentWorkoutCommentGroupObjectID")), null, 2);
  }

  public static toCreateChallengeCommentCommentGroupObjectID(json: string): CreateChallengeCommentCommentGroupObjectID {
      return cast(JSON.parse(json), r("CreateChallengeCommentCommentGroupObjectID"));
  }

  public static createChallengeCommentCommentGroupObjectIDToJson(value: CreateChallengeCommentCommentGroupObjectID): string {
      return JSON.stringify(uncast(value, r("CreateChallengeCommentCommentGroupObjectID")), null, 2);
  }

  public static toUpdateCommentCommentCommentID(json: string): UpdateCommentCommentCommentID {
      return cast(JSON.parse(json), r("UpdateCommentCommentCommentID"));
  }

  public static updateCommentCommentCommentIDToJson(value: UpdateCommentCommentCommentID): string {
      return JSON.stringify(uncast(value, r("UpdateCommentCommentCommentID")), null, 2);
  }

  public static toPOSTLIKEACommentCommentLikeCommentID(json: string): POSTLIKEACommentCommentLikeCommentID {
      return cast(JSON.parse(json), r("POSTLIKEACommentCommentLikeCommentID"));
  }

  public static pOSTLIKEACommentCommentLikeCommentIDToJson(value: POSTLIKEACommentCommentLikeCommentID): string {
      return JSON.stringify(uncast(value, r("POSTLIKEACommentCommentLikeCommentID")), null, 2);
  }

  public static toGETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID(json: string): GETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID {
      return cast(JSON.parse(json), r("GETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID"));
  }

  public static gETCOMMENTSOfPROGRAMURLCommentListGroupContentItemIDToJson(value: GETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID): string {
      return JSON.stringify(uncast(value, r("GETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID")), null, 2);
  }

  public static toGETCOMMENTSOfWorkoutURLCommentListGroupContentItemID(json: string): GETCOMMENTSOfWorkoutURLCommentListGroupContentItemID {
      return cast(JSON.parse(json), r("GETCOMMENTSOfWorkoutURLCommentListGroupContentItemID"));
  }

  public static gETCOMMENTSOfWorkoutURLCommentListGroupContentItemIDToJson(value: GETCOMMENTSOfWorkoutURLCommentListGroupContentItemID): string {
      return JSON.stringify(uncast(value, r("GETCOMMENTSOfWorkoutURLCommentListGroupContentItemID")), null, 2);
  }

  public static toGETREPLIESOfTheCOMMENTURLCommentRepliesCommentID(json: string): GETREPLIESOfTheCOMMENTURLCommentRepliesCommentID {
      return cast(JSON.parse(json), r("GETREPLIESOfTheCOMMENTURLCommentRepliesCommentID"));
  }

  public static gETREPLIESOfTheCOMMENTURLCommentRepliesCommentIDToJson(value: GETREPLIESOfTheCOMMENTURLCommentRepliesCommentID): string {
      return JSON.stringify(uncast(value, r("GETREPLIESOfTheCOMMENTURLCommentRepliesCommentID")), null, 2);
  }

  public static toAddReplyToCommentCommentCommentIDReply(json: string): AddReplyToCommentCommentCommentIDReply {
      return cast(JSON.parse(json), r("AddReplyToCommentCommentCommentIDReply"));
  }

  public static addReplyToCommentCommentCommentIDReplyToJson(value: AddReplyToCommentCommentCommentIDReply): string {
      return JSON.stringify(uncast(value, r("AddReplyToCommentCommentCommentIDReply")), null, 2);
  }

  public static toAddReplyToCommentWithTAGGEDUser(json: string): AddReplyToCommentWithTAGGEDUser {
      return cast(JSON.parse(json), r("AddReplyToCommentWithTAGGEDUser"));
  }

  public static addReplyToCommentWithTAGGEDUserToJson(value: AddReplyToCommentWithTAGGEDUser): string {
      return JSON.stringify(uncast(value, r("AddReplyToCommentWithTAGGEDUser")), null, 2);
  }

  public static toGETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls(json: string): GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls {
      return cast(JSON.parse(json), r("GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls"));
  }

  public static gETSignedURLsForImagesAndVideosCommentCommentIDSignedUrlsToJson(value: GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls): string {
      return JSON.stringify(uncast(value, r("GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls")), null, 2);
  }

  public static toREPORTCOMMENTREPLYCommentReportCommentID(json: string): REPORTCOMMENTREPLYCommentReportCommentID {
      return cast(JSON.parse(json), r("REPORTCOMMENTREPLYCommentReportCommentID"));
  }

  public static rEPORTCOMMENTREPLYCommentReportCommentIDToJson(value: REPORTCOMMENTREPLYCommentReportCommentID): string {
      return JSON.stringify(uncast(value, r("REPORTCOMMENTREPLYCommentReportCommentID")), null, 2);
  }

  public static toGETPERFECTSTARTPrograms(json: string): GETPERFECTSTARTPrograms[] {
      return cast(JSON.parse(json), a(r("GETPERFECTSTARTPrograms")));
  }

  public static gETPERFECTSTARTProgramsToJson(value: GETPERFECTSTARTPrograms[]): string {
      return JSON.stringify(uncast(value, a(r("GETPERFECTSTARTPrograms"))), null, 2);
  }

  public static toGetStatistics(json: string): GetStatistics {
      return cast(JSON.parse(json), r("GetStatistics"));
  }

  public static getStatisticsToJson(value: GetStatistics): string {
      return JSON.stringify(uncast(value, r("GetStatistics")), null, 2);
  }

  public static toGETHOMECombinedData(json: string): GETHOMECombinedData {
      return cast(JSON.parse(json), r("GETHOMECombinedData"));
  }

  public static gETHOMECombinedDataToJson(value: GETHOMECombinedData): string {
      return JSON.stringify(uncast(value, r("GETHOMECombinedData")), null, 2);
  }

  public static toGETHOMEChallengeStats(json: string): GETHOMEChallengeStats {
      return cast(JSON.parse(json), r("GETHOMEChallengeStats"));
  }

  public static gETHOMEChallengeStatsToJson(value: GETHOMEChallengeStats): string {
      return JSON.stringify(uncast(value, r("GETHOMEChallengeStats")), null, 2);
  }

  public static toGETWelcomeScreenData(json: string): GETWelcomeScreenData {
      return cast(JSON.parse(json), r("GETWelcomeScreenData"));
  }

  public static gETWelcomeScreenDataToJson(value: GETWelcomeScreenData): string {
      return JSON.stringify(uncast(value, r("GETWelcomeScreenData")), null, 2);
  }

  public static toGETTermsAndConditions(json: string): GETTermsAndConditions {
      return cast(JSON.parse(json), r("GETTermsAndConditions"));
  }

  public static gETTermsAndConditionsToJson(value: GETTermsAndConditions): string {
      return JSON.stringify(uncast(value, r("GETTermsAndConditions")), null, 2);
  }

  public static toPaginationExample(json: string): PaginationExample {
      return cast(JSON.parse(json), r("PaginationExample"));
  }

  public static paginationExampleToJson(value: PaginationExample): string {
      return JSON.stringify(uncast(value, r("PaginationExample")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
      if (typ.length === 2 && typ[0] === undefined) {
          return `an optional ${prettyTypeName(typ[1])}`;
      } else {
          return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
      }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
      return typ.literal;
  } else {
      return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
      typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
      typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
      if (typeof typ === typeof val) return val;
      return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
      // val must validate against one typ in typs
      const l = typs.length;
      for (let i = 0; i < l; i++) {
          const typ = typs[i];
          try {
              return transform(val, typ, getProps);
          } catch (_) {}
      }
      return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
      if (cases.indexOf(val) !== -1) return val;
      return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
  }

  function transformArray(typ: any, val: any): any {
      // val must be an array with no invalid elements
      if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
      return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
      if (val === null) {
          return null;
      }
      const d = new Date(val);
      if (isNaN(d.valueOf())) {
          return invalidValue(l("Date"), val, key, parent);
      }
      return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
          return invalidValue(l(ref || "object"), val, key, parent);
      }
      const result: any = {};
      Object.getOwnPropertyNames(props).forEach(key => {
          const prop = props[key];
          const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
          result[prop.key] = transform(v, prop.typ, getProps, key, ref);
      });
      Object.getOwnPropertyNames(val).forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(props, key)) {
              result[key] = transform(val[key], additional, getProps, key, ref);
          }
      });
      return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
      if (val === null) return val;
      return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
      ref = typ.ref;
      typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
      return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
          : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
          : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  "CheckIfAGivenUsernameAlreadyExists": o([
      { json: "username_available", js: "username_available", typ: true },
      { json: "status", js: "status", typ: 0 },
  ], false),
  "GetMyUSERDetailsUser": o([
      { json: "id", js: "id", typ: "" },
      { json: "first_name", js: "first_name", typ: "" },
      { json: "last_name", js: "last_name", typ: "" },
      { json: "email", js: "email", typ: "" },
      { json: "gender", js: "gender", typ: 0 },
      { json: "date_of_birth", js: "date_of_birth", typ: Date },
      { json: "profile_photo", js: "profile_photo", typ: null },
      { json: "username", js: "username", typ: "" },
  ], false),
  "CreateUSERWithValidTokenID": o([
      { json: "id", js: "id", typ: "" },
      { json: "first_name", js: "first_name", typ: "" },
      { json: "last_name", js: "last_name", typ: "" },
      { json: "email", js: "email", typ: "" },
      { json: "gender", js: "gender", typ: 0 },
      { json: "date_of_birth", js: "date_of_birth", typ: Date },
      { json: "username", js: "username", typ: "" },
  ], false),
  "CreateUSERWithInvalidTokenID": o([
      { json: "id", js: "id", typ: "" },
      { json: "first_name", js: "first_name", typ: "" },
      { json: "last_name", js: "last_name", typ: "" },
      { json: "email", js: "email", typ: "" },
      { json: "gender", js: "gender", typ: 0 },
      { json: "date_of_birth", js: "date_of_birth", typ: Date },
      { json: "username", js: "username", typ: "" },
  ], false),
  "CreateUSERWithSameEmailAddress": o([
      { json: "id", js: "id", typ: "" },
      { json: "first_name", js: "first_name", typ: "" },
      { json: "last_name", js: "last_name", typ: "" },
      { json: "email", js: "email", typ: "" },
      { json: "gender", js: "gender", typ: 0 },
      { json: "date_of_birth", js: "date_of_birth", typ: Date },
      { json: "username", js: "username", typ: "" },
  ], false),
  "UpdateUSERUpdateUsername": o([
      { json: "id", js: "id", typ: "" },
      { json: "first_name", js: "first_name", typ: "" },
      { json: "last_name", js: "last_name", typ: "" },
      { json: "email", js: "email", typ: "" },
      { json: "gender", js: "gender", typ: 0 },
      { json: "date_of_birth", js: "date_of_birth", typ: Date },
      { json: "profile_photo", js: "profile_photo", typ: "" },
      { json: "username", js: "username", typ: "" },
  ], false),
  "UpdateUSERUpdateUsernameToNull": o([
      { json: "id", js: "id", typ: "" },
      { json: "first_name", js: "first_name", typ: "" },
      { json: "last_name", js: "last_name", typ: "" },
      { json: "email", js: "email", typ: "" },
      { json: "gender", js: "gender", typ: 0 },
      { json: "date_of_birth", js: "date_of_birth", typ: Date },
      { json: "profile_photo", js: "profile_photo", typ: "" },
      { json: "username", js: "username", typ: "" },
  ], false),
  "UpdateUSERUpdateUsernameToEmptyString": o([
      { json: "id", js: "id", typ: "" },
      { json: "first_name", js: "first_name", typ: "" },
      { json: "last_name", js: "last_name", typ: "" },
      { json: "email", js: "email", typ: "" },
      { json: "gender", js: "gender", typ: 0 },
      { json: "date_of_birth", js: "date_of_birth", typ: Date },
      { json: "profile_photo", js: "profile_photo", typ: "" },
      { json: "username", js: "username", typ: "" },
  ], false),
  "UpdateUSERUpdateProfilePhotoToNull": o([
      { json: "id", js: "id", typ: "" },
      { json: "first_name", js: "first_name", typ: "" },
      { json: "last_name", js: "last_name", typ: "" },
      { json: "email", js: "email", typ: "" },
      { json: "gender", js: "gender", typ: 0 },
      { json: "date_of_birth", js: "date_of_birth", typ: Date },
      { json: "profile_photo", js: "profile_photo", typ: "" },
      { json: "username", js: "username", typ: "" },
  ], false),
  "ProfilePhotoUploadPreSignedURL": o([
      { json: "url", js: "url", typ: "" },
      { json: "data", js: "data", typ: r("Data") },
      { json: "key", js: "key", typ: "" },
  ], false),
  "Data": o([
      { json: "key", js: "key", typ: "" },
      { json: "Content-Type", js: "Content-Type", typ: u(undefined, "") },
      { json: "AWSAccessKeyId", js: "AWSAccessKeyId", typ: r("AWSAccessKeyID") },
      { json: "policy", js: "policy", typ: "" },
      { json: "signature", js: "signature", typ: "" },
  ], false),
  "GETPrivacySettings": o([
      { json: "show_statistics", js: "show_statistics", typ: true },
      { json: "show_challenges", js: "show_challenges", typ: true },
      { json: "show_progress_pics", js: "show_progress_pics", typ: true },
  ], false),
  "PATCHPrivacySettings": o([
      { json: "show_statistics", js: "show_statistics", typ: true },
      { json: "show_challenges", js: "show_challenges", typ: true },
      { json: "show_progress_pics", js: "show_progress_pics", typ: true },
  ], false),
  "GETUserBodyInfo": o([
      { json: "body_info", js: "body_info", typ: u(r("BodyInfo"), null) },
  ], false),
  "BodyInfo": o([
      { json: "height", js: "height", typ: r("Eight") },
      { json: "weight", js: "weight", typ: r("Eight") },
  ], false),
  "Eight": o([
      { json: "unit", js: "unit", typ: "" },
      { json: "value", js: "value", typ: 0 },
  ], false),
  "POSTUserBodyInfo": o([
      { json: "detail", js: "detail", typ: u(undefined, "") },
      { json: "status_code", js: "status_code", typ: u(undefined, 0) },
      { json: "height", js: "height", typ: u(undefined, r("Eight")) },
      { json: "weight", js: "weight", typ: u(undefined, r("Eight")) },
  ], false),
  "PUTUserBodyInfo": o([
      { json: "height", js: "height", typ: r("Eight") },
      { json: "weight", js: "weight", typ: r("Eight") },
  ], false),
  "POSTUserProgressPhoto": o([
      { json: "id", js: "id", typ: "" },
      { json: "image_upload_urls", js: "image_upload_urls", typ: r("ImageUploadUrls") },
  ], false),
  "ImageUploadUrls": o([
      { json: "front", js: "front", typ: r("Back") },
      { json: "back", js: "back", typ: r("Back") },
      { json: "side", js: "side", typ: r("Back") },
  ], false),
  "Back": o([
      { json: "url", js: "url", typ: "" },
      { json: "data", js: "data", typ: r("Data") },
      { json: "key", js: "key", typ: "" },
  ], false),
  "GetListOfProgressPhotos": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("GetListOfProgressPhotosResult")) },
  ], false),
  "GetListOfProgressPhotosResult": o([
      { json: "created_at", js: "created_at", typ: Date },
      { json: "id", js: "id", typ: "" },
      { json: "front_image_url", js: "front_image_url", typ: "" },
      { json: "back_image_url", js: "back_image_url", typ: "" },
      { json: "side_image_url", js: "side_image_url", typ: "" },
  ], false),
  "GetOtherUserProgressPhotosUserUserIDProgressPhoto": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("GetListOfProgressPhotosResult")) },
  ], false),
  "SaveUpdateTheProgressPhotos": o([
      { json: "created_at", js: "created_at", typ: Date },
      { json: "id", js: "id", typ: "" },
      { json: "front_image_url", js: "front_image_url", typ: "" },
      { json: "back_image_url", js: "back_image_url", typ: "" },
      { json: "side_image_url", js: "side_image_url", typ: "" },
  ], false),
  "GetUserProfile": o([
      { json: "full_name", js: "full_name", typ: r("FullName") },
      { json: "username", js: "username", typ: "" },
      { json: "profile_photo", js: "profile_photo", typ: "" },
      { json: "statistics", js: "statistics", typ: r("GETUSERPROFILEStatistics") },
      { json: "challenge_results", js: "challenge_results", typ: r("ChallengeResults") },
  ], false),
  "ChallengeResults": o([
      { json: "total_challenges", js: "total_challenges", typ: 0 },
      { json: "best_scores", js: "best_scores", typ: a(r("PurpleBestScore")) },
  ], false),
  "PurpleBestScore": o([
      { json: "challenge", js: "challenge", typ: "" },
      { json: "best_result", js: "best_result", typ: 0 },
      { json: "challenge_type", js: "challenge_type", typ: "" },
  ], false),
  "GETUSERPROFILEStatistics": o([
      { json: "completed_workouts", js: "completed_workouts", typ: "" },
      { json: "current_streak", js: "current_streak", typ: "" },
      { json: "completed_challenges", js: "completed_challenges", typ: "" },
  ], false),
  "GetOtherUserProfile": o([
      { json: "full_name", js: "full_name", typ: "" },
      { json: "username", js: "username", typ: "" },
      { json: "profile_photo", js: "profile_photo", typ: "" },
      { json: "statistics", js: "statistics", typ: u(r("GETOTHERUSERPROFILEStatistics"), null) },
      { json: "challenge_results", js: "challenge_results", typ: u(r("Challenge"), null) },
  ], false),
  "Challenge": o([
      { json: "total_challenges", js: "total_challenges", typ: 0 },
      { json: "best_scores", js: "best_scores", typ: a(r("ChallengesBestScore")) },
  ], false),
  "ChallengesBestScore": o([
      { json: "challenge", js: "challenge", typ: "" },
      { json: "best_result", js: "best_result", typ: 0 },
  ], false),
  "GETOTHERUSERPROFILEStatistics": o([
      { json: "completed_workouts", js: "completed_workouts", typ: 0 },
      { json: "current_streak", js: "current_streak", typ: 0 },
      { json: "completed_challenges", js: "completed_challenges", typ: 0 },
  ], false),
  "RetrieveWORKOUTVideoTags": o([
      { json: "tag_groups", js: "tag_groups", typ: a(r("TagGroup")) },
  ], false),
  "TagGroup": o([
      { json: "tag_group", js: "tag_group", typ: "" },
      { json: "tags", js: "tags", typ: a(r("Tag")) },
  ], false),
  "Tag": o([
      { json: "id", js: "id", typ: "" },
      { json: "name", js: "name", typ: "" },
  ], false),
  "RetrieveBLOGTags": o([
      { json: "tag_groups", js: "tag_groups", typ: a(r("TagGroup")) },
  ], false),
  "RetrieveALLTags": o([
      { json: "tag_groups", js: "tag_groups", typ: a(r("TagGroup")) },
  ], false),
  "GETArticleTags": o([
      { json: "tag_groups", js: "tag_groups", typ: a(r("TagGroup")) },
  ], false),
  "RetrieveVideosOfALLTypesForDiscovery": o([
      { json: "most_popular", js: "most_popular", typ: a(r("NextWorkout")) },
      { json: "newest", js: "newest", typ: a(r("NextWorkout")) },
      { json: "similar", js: "similar", typ: a(r("NextWorkout")) },
  ], false),
  "NextWorkout": o([
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "subtitle", js: "subtitle", typ: u(r("Subtitle"), null) },
      { json: "description", js: "description", typ: "" },
      { json: "duration", js: "duration", typ: u(0, null) },
      { json: "thumbnail", js: "thumbnail", typ: u(null, "") },
      { json: "type", js: "type", typ: r("NextWorkoutType") },
      { json: "day", js: "day", typ: u(undefined, u(null, "")) },
      { json: "smaller_thumbnail_field", js: "smaller_thumbnail_field", typ: u(undefined, u(null, "")) },
      { json: "completed", js: "completed", typ: u(undefined, true) },
      { json: "scheduled_at", js: "scheduled_at", typ: u(undefined, "") },
      { json: "is_part_of_program", js: "is_part_of_program", typ: u(undefined, true) },
  ], false),
  "RetrieveVideosOfWORKOUTTypeForDiscovery": o([
      { json: "most_popular", js: "most_popular", typ: a(r("NextWorkout")) },
      { json: "newest", js: "newest", typ: a(r("NextWorkout")) },
      { json: "similar", js: "similar", typ: a(r("NextWorkout")) },
  ], false),
  "RetrieveVideosOfCHALLENGETypeForDiscovery": o([
      { json: "most_popular", js: "most_popular", typ: a(r("NextWorkout")) },
      { json: "newest", js: "newest", typ: a(r("NextWorkout")) },
      { json: "similar", js: "similar", typ: a(r("NextWorkout")) },
  ], false),
  "RetrieveVideosOfHOWTOTypeForDiscovery": o([
      { json: "most_popular", js: "most_popular", typ: a(r("NextWorkout")) },
      { json: "newest", js: "newest", typ: a(r("NextWorkout")) },
      { json: "similar", js: "similar", typ: a(r("NextWorkout")) },
  ], false),
  "RetrieveVideosOfPROGRAMTypeForDiscovery": o([
      { json: "most_popular", js: "most_popular", typ: a(r("NextWorkout")) },
      { json: "newest", js: "newest", typ: a(r("NextWorkout")) },
      { json: "similar", js: "similar", typ: a(r("NextWorkout")) },
  ], false),
  "RetrievePostsOfRECIPETypeForDiscovery": o([
      { json: "most_popular", js: "most_popular", typ: a(r("MostPopular")) },
      { json: "newest", js: "newest", typ: a(r("MostPopular")) },
      { json: "similar", js: "similar", typ: a(r("MostPopular")) },
  ], false),
  "MostPopular": o([
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "thumbnail", js: "thumbnail", typ: u(null, "") },
      { json: "subtitle", js: "subtitle", typ: "" },
      { json: "type", js: "type", typ: u(undefined, r("RetrieveASingleRECIPEType")) },
      { json: "duration", js: "duration", typ: u(undefined, u(0, null)) },
  ], false),
  "RetrievePostsOfARTICLETypeForDiscovery": o([
      { json: "most_popular", js: "most_popular", typ: a(r("MostPopular")) },
      { json: "newest", js: "newest", typ: a(r("MostPopular")) },
      { json: "similar", js: "similar", typ: a(r("MostPopular")) },
  ], false),
  "FilterALLVideosByTags": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "FilterWORKOUTVideosByTags": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "FilterCHALLENGEVideosByTags": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "FilterPROGRAMSByTags": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "FilterHOWTOByTags": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "FilterARTICLESByTags": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a("any") },
  ], false),
  "FilterRECIPESByTags": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a("any") },
  ], false),
  "RetrieveASingleWORKOUTVideo": o([
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "subtitle", js: "subtitle", typ: r("Subtitle") },
      { json: "description", js: "description", typ: "" },
      { json: "duration", js: "duration", typ: 0 },
      { json: "thumbnail", js: "thumbnail", typ: "" },
      { json: "smaller_thumbnail_field", js: "smaller_thumbnail_field", typ: "" },
      { json: "type", js: "type", typ: r("NextWorkoutType") },
      { json: "day", js: "day", typ: "" },
      { json: "note", js: "note", typ: null },
      { json: "content_type", js: "content_type", typ: 0 },
      { json: "participants", js: "participants", typ: r("Participants") },
      { json: "is_favourite", js: "is_favourite", typ: true },
      { json: "button_colours", js: "button_colours", typ: r("ButtonColours") },
      { json: "button_text_colours", js: "button_text_colours", typ: r("ButtonColours") },
      { json: "next_workout", js: "next_workout", typ: r("NextWorkout") },
      { json: "comments", js: "comments", typ: a("any") },
      { json: "workout_length", js: "workout_length", typ: a(r("Equipment")) },
      { json: "workout_type", js: "workout_type", typ: a(r("Equipment")) },
      { json: "equipment", js: "equipment", typ: a(r("Equipment")) },
      { json: "muscle_group", js: "muscle_group", typ: a(r("Equipment")) },
      { json: "level", js: "level", typ: a(r("Equipment")) },
      { json: "others", js: "others", typ: a(r("Equipment")) },
      { json: "intro_video", js: "intro_video", typ: r("IntroVideo") },
      { json: "workout_video", js: "workout_video", typ: r("Video") },
      { json: "workout_video_with_music", js: "workout_video_with_music", typ: r("IntroVideo") },
      { json: "warmup_video", js: "warmup_video", typ: r("Video") },
      { json: "warmup_video_with_music", js: "warmup_video_with_music", typ: r("IntroVideo") },
  ], false),
  "ButtonColours": o([
      { json: "light_mode", js: "light_mode", typ: "" },
      { json: "dark_mode", js: "dark_mode", typ: "" },
  ], false),
  "Equipment": o([
      { json: "id", js: "id", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "category", js: "category", typ: "" },
  ], false),
  "IntroVideo": o([
      { json: "video", js: "video", typ: "" },
      { json: "file", js: "file", typ: "" },
  ], false),
  "Participants": o([
      { json: "total", js: "total", typ: 0 },
      { json: "profile_photos", js: "profile_photos", typ: a(u(null, "")) },
  ], false),
  "Video": o([
      { json: "video", js: "video", typ: "" },
      { json: "file", js: "file", typ: "" },
      { json: "music_link", js: "music_link", typ: u(null, "") },
  ], false),
  "RetrieveASingleCHALLENGEVideo": o([
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "subtitle", js: "subtitle", typ: r("Subtitle") },
      { json: "description", js: "description", typ: "" },
      { json: "duration", js: "duration", typ: 0 },
      { json: "thumbnail", js: "thumbnail", typ: "" },
      { json: "smaller_thumbnail_field", js: "smaller_thumbnail_field", typ: null },
      { json: "type", js: "type", typ: r("NextWorkoutType") },
      { json: "note", js: "note", typ: null },
      { json: "content_type", js: "content_type", typ: 0 },
      { json: "participants", js: "participants", typ: r("Participants") },
      { json: "is_favourite", js: "is_favourite", typ: true },
      { json: "button_colours", js: "button_colours", typ: r("ButtonColours") },
      { json: "button_text_colours", js: "button_text_colours", typ: r("ButtonColours") },
      { json: "prompt", js: "prompt", typ: null },
      { json: "progress", js: "progress", typ: r("Progress") },
      { json: "comments", js: "comments", typ: a("any") },
      { json: "other_videos", js: "other_videos", typ: a(r("NextWorkout")) },
      { json: "how_to", js: "how_to", typ: "" },
      { json: "workout_length", js: "workout_length", typ: a(r("Equipment")) },
      { json: "workout_type", js: "workout_type", typ: a(r("Equipment")) },
      { json: "equipment", js: "equipment", typ: a(r("Equipment")) },
      { json: "muscle_group", js: "muscle_group", typ: a(r("Equipment")) },
      { json: "level", js: "level", typ: a(r("Equipment")) },
      { json: "others", js: "others", typ: a(r("Equipment")) },
      { json: "workout_video", js: "workout_video", typ: r("Video") },
      { json: "workout_video_with_music", js: "workout_video_with_music", typ: r("IntroVideo") },
  ], false),
  "Progress": o([
      { json: "best_result", js: "best_result", typ: null },
      { json: "results", js: "results", typ: a("any") },
  ], false),
  "RetrieveASingleHOWTOVideo": o([
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: r("Subtitle") },
      { json: "subtitle", js: "subtitle", typ: r("Subtitle") },
      { json: "description", js: "description", typ: r("Subtitle") },
      { json: "duration", js: "duration", typ: 0 },
      { json: "thumbnail", js: "thumbnail", typ: "" },
      { json: "type", js: "type", typ: r("NextWorkoutType") },
      { json: "note", js: "note", typ: null },
      { json: "content_type", js: "content_type", typ: 0 },
      { json: "participants", js: "participants", typ: r("Participants") },
      { json: "is_favourite", js: "is_favourite", typ: true },
      { json: "button_colours", js: "button_colours", typ: r("ButtonColours") },
      { json: "button_text_colours", js: "button_text_colours", typ: r("ButtonColours") },
      { json: "other_videos", js: "other_videos", typ: a(r("NextWorkout")) },
      { json: "workout_length", js: "workout_length", typ: a("any") },
      { json: "workout_type", js: "workout_type", typ: a("any") },
      { json: "equipment", js: "equipment", typ: a("any") },
      { json: "muscle_group", js: "muscle_group", typ: a("any") },
      { json: "level", js: "level", typ: a("any") },
      { json: "others", js: "others", typ: a("any") },
      { json: "workout_video", js: "workout_video", typ: r("IntroVideo") },
  ], false),
  "RetrieveASingleRECIPE": o([
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "thumbnail", js: "thumbnail", typ: null },
      { json: "type", js: "type", typ: r("RetrieveASingleRECIPEType") },
      { json: "is_favourite", js: "is_favourite", typ: true },
      { json: "created_at", js: "created_at", typ: "" },
      { json: "content", js: "content", typ: "" },
  ], false),
  "RetrieveASingleARTICLE": o([
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "thumbnail", js: "thumbnail", typ: null },
      { json: "type", js: "type", typ: r("RetrieveASingleRECIPEType") },
      { json: "is_favourite", js: "is_favourite", typ: true },
      { json: "created_at", js: "created_at", typ: "" },
      { json: "content", js: "content", typ: "" },
  ], false),
  "RetrieveASinglePROGRAMAlongsideWithAssociatedVideos": o([
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "subtitle", js: "subtitle", typ: "" },
      { json: "description", js: "description", typ: "" },
      { json: "duration", js: "duration", typ: null },
      { json: "thumbnail", js: "thumbnail", typ: "" },
      { json: "type", js: "type", typ: r("NextWorkoutType") },
      { json: "workouts", js: "workouts", typ: a(r("NextWorkout")) },
      { json: "is_favourite", js: "is_favourite", typ: true },
      { json: "content_type", js: "content_type", typ: 0 },
      { json: "comments", js: "comments", typ: a("any") },
      { json: "participants", js: "participants", typ: r("Participants") },
      { json: "button_colours", js: "button_colours", typ: r("ButtonColours") },
      { json: "button_text_colours", js: "button_text_colours", typ: r("ButtonColours") },
      { json: "workout_length", js: "workout_length", typ: a(r("Equipment")) },
      { json: "workout_type", js: "workout_type", typ: a(r("Equipment")) },
      { json: "equipment", js: "equipment", typ: a(r("Equipment")) },
      { json: "muscle_group", js: "muscle_group", typ: a(r("Equipment")) },
      { json: "level", js: "level", typ: a(r("Equipment")) },
      { json: "others", js: "others", typ: a(r("Equipment")) },
  ], false),
  "CREATEANoteForWORKOUTVideo": o([
      { json: "note", js: "note", typ: "" },
  ], false),
  "CREATEANoteForCHALLENGEVideo": o([
      { json: "note", js: "note", typ: "" },
  ], false),
  "CREATEANoteForHOWTOVideo": o([
      { json: "note", js: "note", typ: "" },
  ], false),
  "CREATEANoteForPROGRAM": o([
      { json: "note", js: "note", typ: "" },
  ], false),
  "UpdateNoteOnAGivenVideo": o([
      { json: "note", js: "note", typ: "" },
  ], false),
  "UPDATEStreakAndLogWatchedVideoWORKOUT": o([
  ], false),
  "UPDATEStreakAndLogWatchedVideoCHALLENGE": o([
  ], false),
  "GETParticipantsOfAWORKOUT": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("GETParticipantsOfAWORKOUTResult")) },
  ], false),
  "GETParticipantsOfAWORKOUTResult": o([
      { json: "id", js: "id", typ: "" },
      { json: "full_name", js: "full_name", typ: "" },
      { json: "profile_photo", js: "profile_photo", typ: null },
  ], false),
  "GETParticipantsOfACHALLENGE": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("GETParticipantsOfAWORKOUTResult")) },
  ], false),
  "GETParticipantsOfAHOWTO": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("GETParticipantsOfAWORKOUTResult")) },
  ], false),
  "GETParticipantsOfAPROGRAM": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("GETParticipantsOfAWORKOUTResult")) },
  ], false),
  "SearchByKeywordInTheTitleInAllModelsNonExistentSearch": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "SearchByKeywordInTheTitleInAllModelsNonExistentSearchCopy": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "SearchByKeywordInTheTitleInAllModelsAll": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "SearchByKeywordInTheTitleOfAGivenGroupWorkout": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "SearchByKeywordInTheTitleOfAGivenGroupPrograms": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "SearchByKeywordInTheTitleOfAGivenGroupProgressTests": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "SearchByKeywordInTheTitleOfAGivenGroupRecipes": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "SearchByKeywordInTheTitleOfAGivenGroupArticles": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "SuccessfullySaveChallengeResult": o([
      { json: "id", js: "id", typ: "" },
      { json: "challenge_id", js: "challenge_id", typ: "" },
      { json: "result", js: "result", typ: 0 },
  ], false),
  "SaveChallengeResultChallengeIDIsNull": o([
      { json: "id", js: "id", typ: "" },
      { json: "challenge_id", js: "challenge_id", typ: "" },
      { json: "result", js: "result", typ: 0 },
  ], false),
  "SaveChallengeResultChallengeIDIsEmpty": o([
      { json: "id", js: "id", typ: "" },
      { json: "challenge_id", js: "challenge_id", typ: "" },
      { json: "result", js: "result", typ: 0 },
  ], false),
  "SaveChallengeResultResultIsNull": o([
      { json: "id", js: "id", typ: "" },
      { json: "challenge_id", js: "challenge_id", typ: "" },
      { json: "result", js: "result", typ: 0 },
  ], false),
  "SaveChallengeResultResultIsEmpty": o([
      { json: "id", js: "id", typ: "" },
      { json: "challenge_id", js: "challenge_id", typ: "" },
      { json: "result", js: "result", typ: 0 },
  ], false),
  "SaveChallengeResultResultIsNegativeValue": o([
      { json: "id", js: "id", typ: "" },
      { json: "challenge_id", js: "challenge_id", typ: "" },
      { json: "result", js: "result", typ: 0 },
  ], false),
  "SaveChallengeResultWrongChallengeID": o([
      { json: "id", js: "id", typ: "" },
      { json: "challenge_id", js: "challenge_id", typ: "" },
      { json: "result", js: "result", typ: 0 },
  ], false),
  "GETWorkoutHistoryOfUser": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("GETWorkoutHistoryOfUserResult")) },
  ], false),
  "GETWorkoutHistoryOfUserResult": o([
      { json: "date", js: "date", typ: "" },
      { json: "workouts", js: "workouts", typ: a(r("MostPopular")) },
  ], false),
  "FetchHLSURLsForAWorkout": o([
      { json: "intro_video", js: "intro_video", typ: "" },
      { json: "warmup_video", js: "warmup_video", typ: "" },
      { json: "workout_video", js: "workout_video", typ: "" },
  ], false),
  "FetchHLSURLForAChallenge": o([
      { json: "workout_video", js: "workout_video", typ: "" },
  ], false),
  "FetchHLSURLForAHowTo": o([
      { json: "workout_video", js: "workout_video", typ: "" },
  ], false),
  "GETXploreContentContentXploreAll": o([
      { json: "comments", js: "comments", typ: a(r("CommentElement")) },
      { json: "participants", js: "participants", typ: r("Participants") },
  ], false),
  "CommentElement": o([
      { json: "id", js: "id", typ: "" },
      { json: "full_name", js: "full_name", typ: r("FullName") },
      { json: "profile_photo", js: "profile_photo", typ: u(null, "") },
      { json: "created_at", js: "created_at", typ: r("CreatedAt") },
      { json: "comment", js: "comment", typ: r("CommentEnum") },
      { json: "pinned", js: "pinned", typ: true },
  ], false),
  "GETLatestDataOfItemCommentsAndParticipantsContentGroupIDLatest": o([
      { json: "comments", js: "comments", typ: a(r("CommentElement")) },
      { json: "participants", js: "participants", typ: r("Participants") },
  ], false),
  "GetFavouriteChallengesForUser": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "GetFavouriteHowToForUser": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "GetFavouriteProgramsForUser": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "GetFavouriteRecipesForUser": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("MostPopular")) },
  ], false),
  "GetFavouriteArticlesForUser": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("MostPopular")) },
  ], false),
  "GetFavouriteWorkoutsForUser": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "MarkWorkoutAsFavourite": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "CheckUserCanOnlyAddWorkoutToFavouriteAgainOnceFavouriteHasBeenRemoved": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "MarkArticleAsFavourite": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "CheckUserCanOnlyAddArticleToFavouriteAgainOnceFavouriteHasBeenRemoved": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "MarkRecipesAsFavourite": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "CheckUserCanOnlyAddRecipesToFavouriteAgainOnceFavouriteHasBeenRemoved": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "MarkProgramAsFavourite": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "CheckUserCanOnlyAddProgramToFavouriteAgainOnceFavouriteHasBeenRemoved": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "MarkHowToAsFavourite": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "CheckUserCanOnlyAddHowToToFavouriteAgainOnceFavouriteHasBeenRemoved": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "MarkChallengeAsFavourite": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "CheckUserCanOnlyAddChallengeToFavouriteAgainOnceFavouriteHasBeenRemoved": o([
      { json: "object_id", js: "object_id", typ: "" },
      { json: "content_type", js: "content_type", typ: 0 },
  ], false),
  "GETALLSCHEDULEDatesWithWorkoutInfo": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("NextWorkout")) },
  ], false),
  "CreateWorkoutSchedule": o([
      { json: "detail", js: "detail", typ: "" },
  ], false),
  "CreateProgramSchedule": o([
      { json: "detail", js: "detail", typ: "" },
  ], false),
  "UpdateSchedule": o([
      { json: "detail", js: "detail", typ: "" },
  ], false),
  "UpdateScheduleIncludingFollowingWorkouts": o([
      { json: "detail", js: "detail", typ: "" },
  ], false),
  "DeleteSchedule": o([
      { json: "detail", js: "detail", typ: "" },
  ], false),
  "CreateCommentWorkoutCommentGroupObjectID": o([
      { json: "id", js: "id", typ: "" },
      { json: "full_name", js: "full_name", typ: r("FullName") },
      { json: "profile_photo", js: "profile_photo", typ: "" },
      { json: "created_at", js: "created_at", typ: "" },
      { json: "comment", js: "comment", typ: "" },
      { json: "pinned", js: "pinned", typ: true },
      { json: "total_likes", js: "total_likes", typ: 0 },
      { json: "total_replies", js: "total_replies", typ: 0 },
      { json: "is_liked", js: "is_liked", typ: true },
      { json: "username", js: "username", typ: "" },
      { json: "replies", js: "replies", typ: a("any") },
      { json: "images", js: "images", typ: a(r("CreateCommentWorkoutCommentGroupObjectIDImage")) },
      { json: "videos", js: "videos", typ: a(r("CreateCommentWorkoutCommentGroupObjectIDVideo")) },
      { json: "deleted", js: "deleted", typ: true },
  ], false),
  "CreateCommentWorkoutCommentGroupObjectIDImage": o([
      { json: "id", js: "id", typ: "" },
      { json: "image_url", js: "image_url", typ: "" },
  ], false),
  "CreateCommentWorkoutCommentGroupObjectIDVideo": o([
      { json: "id", js: "id", typ: "" },
      { json: "video_url", js: "video_url", typ: "" },
      { json: "thumbnail_url", js: "thumbnail_url", typ: "" },
  ], false),
  "CreateChallengeCommentCommentGroupObjectID": o([
      { json: "id", js: "id", typ: "" },
      { json: "full_name", js: "full_name", typ: r("FullName") },
      { json: "profile_photo", js: "profile_photo", typ: "" },
      { json: "created_at", js: "created_at", typ: "" },
      { json: "comment", js: "comment", typ: "" },
      { json: "pinned", js: "pinned", typ: true },
      { json: "total_likes", js: "total_likes", typ: 0 },
      { json: "total_replies", js: "total_replies", typ: 0 },
      { json: "is_liked", js: "is_liked", typ: true },
      { json: "username", js: "username", typ: "" },
      { json: "replies", js: "replies", typ: a("any") },
      { json: "images", js: "images", typ: a(r("CreateCommentWorkoutCommentGroupObjectIDImage")) },
      { json: "videos", js: "videos", typ: a(r("CreateCommentWorkoutCommentGroupObjectIDVideo")) },
      { json: "deleted", js: "deleted", typ: true },
  ], false),
  "UpdateCommentCommentCommentID": o([
      { json: "id", js: "id", typ: "" },
      { json: "comment", js: "comment", typ: "" },
      { json: "videos", js: "videos", typ: u(undefined, a(r("UpdateCommentCommentCommentIDVideo"))) },
      { json: "images", js: "images", typ: u(undefined, a(r("UpdateCommentCommentCommentIDImage"))) },
  ], false),
  "UpdateCommentCommentCommentIDImage": o([
      { json: "id", js: "id", typ: "" },
      { json: "image", js: "image", typ: "" },
  ], false),
  "UpdateCommentCommentCommentIDVideo": o([
      { json: "id", js: "id", typ: "" },
      { json: "video", js: "video", typ: "" },
      { json: "thumbnail", js: "thumbnail", typ: "" },
  ], false),
  "POSTLIKEACommentCommentLikeCommentID": o([
  ], false),
  "GETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("ReplyElement")) },
  ], false),
  "ReplyElement": o([
      { json: "id", js: "id", typ: "" },
      { json: "full_name", js: "full_name", typ: "" },
      { json: "profile_photo", js: "profile_photo", typ: u(null, "") },
      { json: "created_at", js: "created_at", typ: "" },
      { json: "comment", js: "comment", typ: "" },
      { json: "pinned", js: "pinned", typ: u(undefined, true) },
      { json: "total_likes", js: "total_likes", typ: 0 },
      { json: "total_replies", js: "total_replies", typ: u(undefined, 0) },
      { json: "is_liked", js: "is_liked", typ: true },
      { json: "username", js: "username", typ: u(undefined, "") },
      { json: "replies", js: "replies", typ: u(undefined, a(r("ReplyElement"))) },
      { json: "images", js: "images", typ: a(r("CreateCommentWorkoutCommentGroupObjectIDImage")) },
      { json: "videos", js: "videos", typ: a(r("CreateCommentWorkoutCommentGroupObjectIDVideo")) },
      { json: "tagged_user", js: "tagged_user", typ: u(undefined, null) },
      { json: "deleted", js: "deleted", typ: u(undefined, true) },
  ], false),
  "GETCOMMENTSOfWorkoutURLCommentListGroupContentItemID": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: "" },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("ReplyElement")) },
  ], false),
  "GETREPLIESOfTheCOMMENTURLCommentRepliesCommentID": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: null },
      { json: "previous", js: "previous", typ: null },
      { json: "results", js: "results", typ: a(r("ReplyElement")) },
  ], false),
  "AddReplyToCommentCommentCommentIDReply": o([
      { json: "id", js: "id", typ: "" },
      { json: "full_name", js: "full_name", typ: r("FullName") },
      { json: "profile_photo", js: "profile_photo", typ: "" },
      { json: "created_at", js: "created_at", typ: "" },
      { json: "comment", js: "comment", typ: "" },
      { json: "pinned", js: "pinned", typ: true },
      { json: "total_likes", js: "total_likes", typ: 0 },
      { json: "is_liked", js: "is_liked", typ: true },
      { json: "username", js: "username", typ: "" },
      { json: "images", js: "images", typ: a("any") },
      { json: "videos", js: "videos", typ: a("any") },
      { json: "deleted", js: "deleted", typ: true },
      { json: "tagged_user", js: "tagged_user", typ: null },
  ], false),
  "AddReplyToCommentWithTAGGEDUser": o([
      { json: "id", js: "id", typ: "" },
      { json: "comment", js: "comment", typ: "" },
      { json: "images", js: "images", typ: a("any") },
      { json: "videos", js: "videos", typ: a("any") },
      { json: "tagged_user", js: "tagged_user", typ: r("TaggedUser") },
  ], false),
  "TaggedUser": o([
      { json: "id", js: "id", typ: "" },
      { json: "full_name", js: "full_name", typ: "" },
  ], false),
  "GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrls": o([
      { json: "images", js: "images", typ: a(r("GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrlsImage")) },
      { json: "videos", js: "videos", typ: a(r("GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrlsVideo")) },
  ], false),
  "GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrlsImage": o([
      { json: "image_upload_url", js: "image_upload_url", typ: r("Back") },
  ], false),
  "GETSignedURLsForImagesAndVideosCommentCommentIDSignedUrlsVideo": o([
      { json: "thumbnail_upload_url", js: "thumbnail_upload_url", typ: r("Back") },
      { json: "video_upload_url", js: "video_upload_url", typ: r("Back") },
  ], false),
  "REPORTCOMMENTREPLYCommentReportCommentID": o([
      { json: "id", js: "id", typ: u(undefined, "") },
      { json: "detail", js: "detail", typ: u(undefined, a("")) },
      { json: "status_code", js: "status_code", typ: u(undefined, 0) },
  ], false),
  "GETPERFECTSTARTPrograms": o([
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "subtitle", js: "subtitle", typ: "" },
      { json: "description", js: "description", typ: "" },
      { json: "duration", js: "duration", typ: null },
      { json: "thumbnail", js: "thumbnail", typ: "" },
  ], false),
  "GetStatistics": o([
      { json: "statistics", js: "statistics", typ: r("GETUSERPROFILEStatistics") },
  ], false),
  "GETHOMECombinedData": o([
      { json: "statistics", js: "statistics", typ: r("GETUSERPROFILEStatistics") },
      { json: "calendar", js: "calendar", typ: a("") },
      { json: "today", js: "today", typ: r("NextWorkout") },
      { json: "favourites", js: "favourites", typ: a(r("NextWorkout")) },
      { json: "first_name", js: "first_name", typ: "" },
  ], false),
  "GETHOMEChallengeStats": o([
      { json: "challenges", js: "challenges", typ: r("Challenge") },
  ], false),
  "GETWelcomeScreenData": o([
      { json: "welcome_screens", js: "welcome_screens", typ: a(r("WelcomeScreen")) },
  ], false),
  "WelcomeScreen": o([
      { json: "image_url", js: "image_url", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "subtitle", js: "subtitle", typ: "" },
  ], false),
  "GETTermsAndConditions": o([
      { json: "terms_and_conditions", js: "terms_and_conditions", typ: "" },
      { json: "privacy_policy", js: "privacy_policy", typ: "" },
  ], false),
  "PaginationExample": o([
      { json: "count", js: "count", typ: 0 },
      { json: "next", js: "next", typ: "" },
      { json: "previous", js: "previous", typ: "" },
      { json: "results", js: "results", typ: a(r("ReplyElement")) },
  ], false),
  "AWSAccessKeyID": [
      "AKIA3TQLJCGCT3ATWYV5",
  ],
  "FullName": [
      "Ankur adlakha",
      "MockEdit User",
  ],
  "Subtitle": [
      "Beastmode Series Day 6",
      "Beastmode Series Day 9 Subtitle",
      "Caching test",
      "Cicuit Series Day 5",
      "",
      "How To 1",
      "How To Test",
      "Iron Series Day 8 Subtitle",
      "No warmup video",
      "sub",
      "Test Challenge SUB",
      "TEST HOW TO",
      "30 min FULL BODY STRENGTH Workout with Weights",
      "This is a test subtitle",
  ],
  "NextWorkoutType": [
      "challenge",
      "how-to",
      "program",
      "workout",
  ],
  "RetrieveASingleRECIPEType": [
      "article",
      "recipe",
  ],
  "CommentEnum": [
      "Hi",
      "Mock Comment",
  ],
  "CreatedAt": [
      "16h",
      "1d",
      "23h",
  ],
};

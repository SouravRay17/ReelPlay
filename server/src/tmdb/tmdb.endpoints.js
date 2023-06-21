import tmdbConfig from "./tmdb.config.js";
const tmdbEndpoints = {
    mediaList: ({mediaType, mediaCategory, page}) => tmdbConfig.getUrL(
        `${mediaType}/${mediaCategory}`,page
    ),
    mediaDetail: ({mediaType, mediaId}) => tmdbConfig.getUrL(
        `${mediaType}/${mediaId}`
    ),
    mediaGenres: ({mediaType})=> tmdbConfig.getUrL(
        `genre/${mediaType}/list`
    ),
    mediaCredits: ({mediaType, mediaId})=> tmdbConfig.getUrL(
        `${mediaType}/${mediaId}/credits`
    ),
    mediaVideos: ({ mediaType, mediaId})=> tmdbConfig.getUrL(
        `${mediaType}/${mediaId}/videos`
    ),
    mediaRecommend: ({ mediaType, mediaId})=> tmdbConfig.getUrL(
        `${mediaType}/${mediaId}/recommendations`
    ),
    mediaImages: ({ mediaType, mediaId})=> tmdbConfig.getUrL(
        `${mediaType}/${mediaId}/images`
    ),
    mediaSearch: ({mediaType, query, page})=> tmdbConfig.getUrL(
        `search/${mediaType}`,{query, page}
    ),
    personDetail: ({personId})=> tmdbConfig.getUrL(
        `person/${personId}`
    ),
    personMedias: ({personId})=> tmdbConfig.getUrL(
        `person/${personId}/combined_credits`
    ),
};

export default tmdbEndpoints;
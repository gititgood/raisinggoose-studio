import blockContent from './blockContent.js'
import category from './category.js'
import post from './post.js'
import author from './author.js'
import stimEvents from '../schemas/stimEvents.js'
import observations from '../schemas/observations.js'
import carousel from './carousel.js'
import heroImage from './heroImage.js'
import heroSection from './sections/heroSection.js'
import homePage from './homePage.js'
import imageOverlaySection from './sections/imageOverlaySection.js'
import { imageTile } from './sections/imageTile.js'
import { link } from './objects/links.js'
import timeLineEntry from './timeLineEntry.js'
import siteNotice from "./siteNotice";
import memorialCard from './memorialCard.js'

export const schemaTypes = [post, author, category, blockContent, stimEvents, observations, carousel, heroImage, heroSection, homePage, imageOverlaySection, imageTile, link, timeLineEntry, siteNotice, memorialCard]
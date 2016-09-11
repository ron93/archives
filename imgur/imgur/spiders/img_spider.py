import scrapy

from scrapy.contrib.spiders import Rule, CrawlSpider
from scrapy.crawler import CrawlerProcess
from scrapy.contrib.linkextractors import LinkExtractor

from imgur.items import ImgurItem


class ImgurSpider(CrawlSpider):
	name = 'imgur'
	allowed_domains = {'imgur.com'}
	start_urls = ['http://www.imgur.com']
	rules = [Rule(LinkExtractor(allow=['/gallery/.*']),'parse_imgur')]
	

	def parse_imgur(self, response):
		image = ImgurItem()
		image['title'] = response.xpath("//h1[@id='image-title']/text()").extract()
		
		rel= response.xpath("//img/@src").extract()
        
		image['image_urls'] = ['http:' + rel[0]]

		return image

process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
})

process.crawl(ImgurSpider)
process.start() # the script will block here until the crawling is finished



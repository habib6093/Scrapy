# -*- coding: utf-8 -*-
import scrapy


class LinkSpider(scrapy.Spider):
    name = "link"
    allowed_domains = ["http://quotes.toscrape.com/"]
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        for i in response.css('div.quote'):
          yield {
            'author': i.css('small.author::text').extract_first(),
            'quote': i.css('span.text::text').extract_first(),
            
           }







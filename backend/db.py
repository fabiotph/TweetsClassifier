import threading
import csv
import time
import pandas as pd

TWEETS_CSV = "tweets.csv"
CLASSIFIED_TWEETS_CSV = "classified_tweets.csv"

class DB:
   __slots__ = 'data', 'classified_data', 'value', 'cache'
   def __init__(self):
      self.data = self.__generate_date()
      self.classified_data = self.__generate_date(CLASSIFIED_TWEETS_CSV)
      self.value = len(pd.read_csv(CLASSIFIED_TWEETS_CSV))
      self.cache = {}

   def __generate_date(self, file_name=TWEETS_CSV):
      return pd.read_csv(file_name, encoding="utf-8")

   def save_classification(self, id, only_offensive=0, homophobia=0, racism=0, not_offensive=0):
      tweet = self.cache.pop(str(id))
      if not len(tweet):
         raise Exception("Tweet alredy classified or not exists")
      print(repr(tweet["text"]))
      new_row = {
         'tweet_id': str(id), 
         'text': tweet["text"], 
         'keyword': tweet["keyword"], 
         'only_offensive': only_offensive, 
         'homophobia': homophobia, 
         'racism': racism, 
         'not_offensive': not_offensive
      }
      print("new_row", new_row)
      row_df = pd.DataFrame(data=new_row,index=[0])
      self.classified_data = pd.concat([self.classified_data, row_df], ignore_index=True)
      print('classified_data\n\n', self.classified_data)
      self.classified_data.to_csv(CLASSIFIED_TWEETS_CSV, sep=',', encoding='utf-8', index=False)

   def get_tweet(self):
      tweet = self.data.iloc[self.value]
      self.cache[str(tweet['tweet_id'])] = tweet
      self.value += 1
      return tweet

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# DB設計
##　usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|

## Asociation
- has_many:groups_users
- has_many:groups, through: groups_users
- has_many:comments

##　groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|name|string|null: false|

## Asociation
- has_many:groups_users
- has_many:users, through: groups_users
- has_many:comments

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|stirng||
|image|string||


### Association
- belongs_to :group
- belongs_to :user
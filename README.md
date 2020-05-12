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
|e-mail|string|null: false|
|password|string|null: false|
|nickname|string|null: false|

## Asociation
- has_many:groupes_users
- has_many:groupes, through: groupes_users
- has_many:comments

##　groupesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|

## Asociation
- has_many:groupes_users
- has_many:users, through: groupes_users
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

### Association
- belongs_to :group
- belongs_to :user
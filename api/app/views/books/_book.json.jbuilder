json.extract! book, :id, :title, :author_id, :topic_id, :storage_place_id, :created_at, :updated_at
json.url book_url(book, format: :json)

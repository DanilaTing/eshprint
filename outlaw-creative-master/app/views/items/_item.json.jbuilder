json.extract! item, :id, :caption, :order, :url, :type, :created_at, :updated_at
json.url item_url(item, format: :json)

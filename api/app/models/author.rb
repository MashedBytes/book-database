class Author < ApplicationRecord
  validates :first_name, :last_name, presence: true, length: { minimum: 3 }
end

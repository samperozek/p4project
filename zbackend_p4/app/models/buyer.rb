class Buyer < ApplicationRecord
    has_many :vans
    has_many :owners, through: :vans
end

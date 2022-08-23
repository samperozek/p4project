class Van < ApplicationRecord
  belongs_to :buyer
  belongs_to :owner
end

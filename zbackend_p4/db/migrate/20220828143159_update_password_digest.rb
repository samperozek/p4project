class UpdatePasswordDigest < ActiveRecord::Migration[7.0]
  def change
    rename_column :owners, :password, :password_digest
    
  end
end

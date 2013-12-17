class Datum
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  field :point, type: Hash
  
end

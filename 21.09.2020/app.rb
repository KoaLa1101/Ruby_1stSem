class LinkedList
  include Enumerable

  attr_reader :tail, :head
  attr_writer :head

  def initialize(head, tail = nil)
    @tail = tail
    @head = head
  end

  def <<(value)
    LinkedList.new(value, self)
  end

  def each(&block)
    if block_given?
      block.call(@head)
      @tail.each(&block) if @tail
    else
      to_enum(:each)
    end
  end

  def [](n)
    if n>=self.count
      return nil
    else
      tmp = self
      for i in 0..n-1 do
        tmp = tmp.tail
      end
      return tmp.head
    end
  end

  def []=(n, value)
    if n>=self.count
      return nil
    else
      tmp = self
      for i in 0..n-1 do
        tmp = tmp.tail
      end
      tmp.head = value
    end
  end

  l_l = LinkedList.new(4)<<5<<6
  puts l_l.count()
  puts l_l.max()
  puts l_l.sum()
  puts l_l.[](1)

end

# THIS CREATED summary.txt in lib
def get_type(g)
  type = g.split(' ')[-1]
  type == '3' ? '2' : type
end

def create_summary
  summary={}
  f=File.open('lib/hdfdbn.txt')
  galaxies = f.read.split("\n")
  summary['n'] = galaxies.map{|g|get_type(g)}
  f.close

  f=File.open('lib/hdfdbs.txt')
  galaxies = f.read.split("\n")
  summary['s'] = galaxies.map{|g|get_type(g)}
  f.close
  s = JSON.dump(summary)
  f=File.open('lib/hdf_summary.txt','w')
  f.puts s
  f.close
  f=File.open('lib/hdf_summary.txt','r')
   s=JSON.parse(f.gets)
  s.keys
end  
def load_summary(field)
  f=File.open('lib/hdf_summary.txt','r')
  s=JSON.parse(f.gets)
  s[field]
end